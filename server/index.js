import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import projectsRouter from "./Routes/projectsRouter.js";
import calculateDonationMoney from "./testing/test.js";
import authRoutes from "./Routes/authRoute.js";
import userRouter from "./Routes/userRoute.js";
import passport from "passport";
import passportConfig from "./config/passport.js";

dotenv.config();

const addMiddlewares = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  const corsOptions = {
    origin:
      "https://you-can-do-it-mern-mbqm1a26b-benosa58s-projects.vercel.app",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));
  app.use(passport.initialize());
  passportConfig(passport);
};

const startServer = () => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log("SERVER IS RUNNING on " + port + " port");
  });
};

const loadRoutes = () => {
  app.use("/projects", projectsRouter);
  app.use("/api/user", userRouter);
  app.use("/api/auth", authRoutes);

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });
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

//! THIS BELOW IS JUST FOR TESTING.DELETE AFTER FINISHED
calculateDonationMoney();
