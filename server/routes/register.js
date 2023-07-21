const express = require("express");
const router = express.Router();
const User = require("../models/Users")

 
router.post("/register", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.send(500).send(error.message)
        
    }
});
module.exports= router