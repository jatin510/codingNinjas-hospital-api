const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

console.log("inside jwt");

const Doctor = require("../models/doctor");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "covid19",
};

console.log("inside jwt");

passport.use(
  new JWTStrategy(opts, (jwtPayload, done) => {
    console.log("inside jwt ");
    Doctor.findById(jwtPayload._id, (err, doctor) => {
      if (err) console.log("Error finding error from JWT");
      if (doctor) return done(null, doctor);
      else return done(null, false);
    });
  })
);

module.exports = passport;
