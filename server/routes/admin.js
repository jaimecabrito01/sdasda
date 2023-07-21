const express = require("express");
const router = express.Router();
const Questions = require("../models/Question")



router.post("/creat", async (req, res) => {
    try {
        const questions = await Questions.create(req.body);
        res.send(201).send(questions);
    } catch (error) {
        res.sendStatus(500).send(error.message)
        
    }
});



router.get("/questions", async (req, res) => {
  try {
    const questions = await Questions.find({});
    res.status(201).send(questions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router