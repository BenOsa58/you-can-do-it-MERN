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
import passportCheck from "../utils/passportCheck.js";
const projectsRouter = express.Router();

projectsRouter.get("/all", getAllProjects);
projectsRouter.get("/singleProject/:projectId", getProjectById);

projectsRouter.delete("/singleProject/delete", passportCheck, deleteProject);

projectsRouter.patch("/:id", updateProject);

projectsRouter.post(
  "/createProject",

  createProject
);

projectsRouter.post("/donate/:projectId", addDonationToProject);

export default projectsRouter;
