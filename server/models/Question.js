const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Questions = new Schema({
    nivel_pergunta: {
        type:String
    },
    pergunta: {
        type: String
    },
    alter_A: {
        type:String
    },
    alter_B: {
        type:String
    },
    alter_C: {
        type:String
    },
    alter_D: {
        type: String
    },
    reposta: {
        type:String
    }



})
const perguntas = mongoose.model("questions", Questions)
module.exports = perguntas