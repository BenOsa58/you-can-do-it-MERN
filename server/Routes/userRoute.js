import express from "express";
import {
  checkUserStatus,
  signin,
  signup,
  signout,
} from "../controllers/userController.js";

import passportCheck from "../utils/passportCheck.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("List of users");
});

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/checkStatus", passportCheck, checkUserStatus);
userRouter.get("/signout", signout);
export default userRouter;
