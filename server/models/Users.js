const mongoose = require("mongoose");
const Schema = mongoose.Schema
const User = new Schema({
    name: {
        type: String,
        
    },
    image: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
})
user.pre(
    'save',
    async function(next) {
      const user = this;
      const hash = await bcrypt.hash(this.password, 10);
  
      this.password = hash;
      next();
    }
  );
const user = mongoose.model("Users", User)
module.exports = user