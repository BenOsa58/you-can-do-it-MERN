import express, { Router } from "express";
import {
  addDonationToProject,
  getAllProjects,
  getProjectById,
  deleteProject,
  updateProject,
  createProject,
} from "../controllers/projectsController.js";
import multerUpload from "../middlewares/multer.js";
const projectsRouter = express.Router();

projectsRouter.get("/all", getAllProjects);
projectsRouter.get("/:projectId", getProjectById);

projectsRouter.delete("/:id", deleteProject);

projectsRouter.patch("/:id", updateProject);

// projectsRouter.post(
//   "/createProject",
//   multerUpload.single("projectImage"),
//   createProject
// );
projectsRouter.post(
  "/createProject",

  createProject
);

projectsRouter.post("/donate/:projectId", addDonationToProject);

export default projectsRouter;
