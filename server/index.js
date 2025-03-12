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
import paymentRouter from "./Routes/paymentRoute.js";

dotenv.config();

const addMiddlewares = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  // make url env variable
  const corsOptions = {
    origin: "http://localhost:5173",
    // origin: ["https://you-can-do-it-mern-86oq.vercel.app"],
  };
  app.use(cors());
  // app.use(cors(corsOptions));
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
  app.use("/api/projects", projectsRouter);
  app.use("/api/user", userRouter);
  app.use("/api/auth", authRoutes);
  app.use("/api/payments", paymentRouter);

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
