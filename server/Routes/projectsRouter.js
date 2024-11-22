import express from "express";
import {
  addDonationToProject,
  getAllProjects,
  getProjectById,
} from "../controller/projectsController.js";
const projectsRouter = express.Router();

projectsRouter.get("/all", getAllProjects);
projectsRouter.get("/:projectId", getProjectById);
projectsRouter.post("/donate/:projectId", addDonationToProject);

export default projectsRouter;
