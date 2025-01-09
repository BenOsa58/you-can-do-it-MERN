import passport from "passport";

const passportCheck = passport.authenticate("jwt", { session: false });

export default passportCheck;
