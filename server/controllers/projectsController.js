import projectsModel from "../model/projectsModel.js";
import mongoose from "mongoose";
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
  const { firstName, lastName, email, amount } = req.body;
  const donor = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  console.log("req.params :>> ", req.params);
  console.log("req.body :>> ", req.body);

  if (amount === "" || email === "") {
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

const deleteProject = async (req, res) => {
  console.log("delete :>> ");
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such project" });
  }
  try {
    const project = await projectsModel.findOneAndDelete({ _id: id });
    if (!project) {
      return res.status(400).json({ error: "No such project" });
    } else {
      return res.status(200).json({
        message: "Project deleted successfully ",
        deletedProject: project,
      });
    }
  } catch (error) {
    console.log("error deleting :>> ", error);
    return res.status(400).json({
      error: "something went wrong deleting the project ",
    });
  }
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such project" });
  }
  const project = await projectsModel.findOneAndUpdate({ _id: id }, update, {
    returnOriginal: false,
  });
  console.log("project :>> ", project);
  if (!project) {
    return res.status(400).json({ error: "No such project" });
  }
  res.status(200).json(project);
};

const createProject = async (req, res) => {
  console.log("req.body :>> ", req.body);

  const project = new projectsModel({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  });
  console.log("project :>> ", project);
  try {
    const data = await project.save();
    console.log("data :>> ", data);

    return res
      .status(201)
      .json({ message: "Project created successfully!", data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export {
  getAllProjects,
  addDonationToProject,
  getProjectById,
  deleteProject,
  updateProject,
  createProject,
};