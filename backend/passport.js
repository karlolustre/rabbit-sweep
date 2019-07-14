const passport = require('passport');

const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;

const JWTStrategy = passportJWT.Strategy;

const UserModel = require('./models/User');

const bcrypt = require(bcrypt);

//passport.js to use the local strategy
