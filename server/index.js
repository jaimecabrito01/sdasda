const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors")
const users = require("./routes/register")
const questions=  require("./routes/admin")
const bodyparser = require("body-parser")
const connectToDatabase = require("./database/connection")
const passport = require("passport")
require("./config/auth")(passport)

connectToDatabase();
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
  });
app.use(
    session({
      secret: "secret-key",
      resave: true,
      saveUninitialized: true,
    })
);
app.use(passport.initialize())
app.use(passport.session())
app.get("/", async (req, res) => {
    res.status(200);
})
app.listen(8080, () => {
    console.log("Aplicação rodando")
});
app.use(express.json());
app.use(morgan("default",questions.options))
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use("/users", users)
app.use("/admin",questions)
