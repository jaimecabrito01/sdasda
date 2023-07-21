const localStrategy = require("passport-local").Strategy;
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
