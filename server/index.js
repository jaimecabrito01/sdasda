const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors")
const users = require("./routes/register")
const questions=  require("./routes/admin")
const bodyparser = require("body-parser")
const connectToDatabase = require("./database/connection")

connectToDatabase();
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
