import jwt from "jsonwebtoken";

import User from "../model/userModel.js";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_OR_KEY, { expiresIn: "3d" });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signin(email, password);

    // create a Token
    const token = createToken(user._id);

    res.status(200).json({
      message: "You Signed in / Login successfully",
      user: {
        username: user.username,
        email: user.email,
      },

      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// signup user
const signup = async (req, res) => {
  console.log("req.body :>> ", req.body);
  const { email, password, username } = req.body;

  try {
    const user = await User.signup(email, password, username);
    console.log("user._id :>> ", user._id);

    //! We create the token with the signin
    // create a Token
    // const token = createToken(user._id);

    res.status(200).json({
      message: "Signup successfully completed",
      user: {
        username: user.username,
        email: user.email,
      },

      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signout = async () => {
  //we leave here for future potential functionality
};

const checkUserStatus = async (req, res) => {
  console.log("req.user :>> ", req.user);
  const loggedUser = {
    username: req.user.username,
    email: req.user.email,
    id: req.user._id,
    createdAt: req.user.createdAt,
    updatedAt: req.user.updatedAt,
  };
  if (req.user) {
    return res.status(200).json({
      user: loggedUser,
    });
  } else {
    return res.status(400).json({
      error: "you need to signin again",
    });
  }
};

export { signin, signup, checkUserStatus, signout };
