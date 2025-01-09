import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import * as dotenv from "dotenv";
import User from "../model/userModel.js";
dotenv.config();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload._id);
    console.log("user :>> ", user);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err, false);
  }
});

const passportConfig = (passport) => {
  passport.use(jwtStrategy);
};

export default passportConfig;
