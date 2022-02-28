const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required!",
    minlength: 3,
    maxlength: 100,
  },
  age: {
    type: Number,
    required: "Age is required!",
    minlength: 2,
    maxlength: 4,
  },
});

module.exports = mongoose.model("user", userSchema);
