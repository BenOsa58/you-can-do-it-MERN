import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import projectsRouter from "./Routes/projectsRouter.js";
dotenv.config();
const addMiddlewares = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
};

const startServer = () => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log("SERVER IS RUNNING on " + port + " port");
  });
};

const loadRoutes = () => {
  app.use("/projects", projectsRouter);
};

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected WITH DATABASE");
  } catch (error) {
    console.log("problem connecting with database", error);
  }
};

const controller = () => {
  databaseConnection();
  addMiddlewares();
  loadRoutes();
  startServer();
};

controller();
