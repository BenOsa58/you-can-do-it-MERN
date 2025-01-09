import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Validator from "validator";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (email, password, username) {
  console.log("email, password :>> ", email, password);
  console.log("signup");
  // validation
  if (!email || !password) {
    throw Error("All field must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  //NOTE commented only for practical reasons while developing
  // if (!validator.isStrongPassword(password)) {
  //   throw Error("Password not strong enough");
  // }
  const exits = await this.findOne({ email });

  if (exits) {
    throw Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log("hash :>> ", hash);
  const user = await this.create({ email, password: hash, username });

  return user;
};

userSchema.statics.signin = async function (email, password) {
  console.log("email, password", email, password);
  if (!email || !password) {
    throw Error("All field must be filled");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};
const User = mongoose.model("User", userSchema);
export default User;
