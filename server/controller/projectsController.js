import projectsModel from "../model/projectsModel.js";

const getAllProjects = async (req, res) => {
  try {
    const allProjects = await projectsModel.find({});
    console.log("allProjects :>> ", allProjects);
    res.status(200).json({
      message: "all projects in my database",
      number: allProjects.length,
      projects: allProjects,
    });
  } catch (error) {
    console.log("error :>> ", error);
    res.status(400).json({
      errorMessage: "something went wrong in the server",
    });
  }
};

const getProjectById = async (req, res) => {
  const { projectId } = req.params;
  try {
    const project = await projectsModel.findById(projectId);
    console.log("project :>> ", project);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(204).json({
        message: "No project matching id",
      });
    }
  } catch (error) {
    console.log("error :>> ", error);
    res.status(400).json({
      errorMessage: "something went wrong in the server",
    });
  }
};
const addDonationToProject = async (req, res) => {
  const { projectId } = req.params;
  const { amount, donor } = req.body;

  if (amount === "" || donor === "") {
    res.status(200).json({
      success: false,
      message: "Missing information",
    });
  } else {
    try {
      const project = await projectsModel.findByIdAndUpdate(projectId, {
        $push: {
          donations: {
            donor: donor,
            amount,
          },
        },
      });
      if (project) {
        res.status(200).json({
          success: true,
          message: "Donation successful",
        });
      } else {
        res.status(200).json({
          success: false,
          message: "No project matching id",
        });
      }
    } catch (error) {
      console.log("error :>> ", error);
      res.status(400).json({
        errorMessage: "something went wrong in the server",
      });
    }
  }
};
export { getAllProjects, addDonationToProject, getProjectById };
