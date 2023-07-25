const localStrategy = require("passport-local").Strategy;
const User = require("../models/Users");
const bcrypt = require("bcryptjs");

module.exports = function (passport) {
  passport.use(
    new localStrategy(
      {
        usernameField: "name",
        passwordField: "password",
      },
      (name, password, done) => {
        User.findOne({ name: name })
          .lean()
          .then((usuario) => {
            if (!usuario) {
              return done(null, false, { message: "Essa conta não existe" });
            } else {
              bcrypt.compare(password, usuario.password, (erro, batem) => {
                if (batem) {
                  return done(null, usuario);
                } else {
                  return done(null, false, { message: "Senha incorreta" });
                }
              });
            }
          });
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    }).catch((err) => {
      done(null, false, { message: "algo deu errado" });
    });
  });
};
