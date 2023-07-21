const Questions  = require("../models/Question")

const getAll = async (req, res) => {
    const questions = await Questions.find({});
    res.status(200).send(questions);
}
module.exports = {
    getAll
}