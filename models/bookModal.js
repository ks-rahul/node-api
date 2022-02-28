const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  published: {
    type: Date,
    default: Date.now,
  },
  keywords: Array,
  published: Boolean,
  author: {
    type: Schema.ObjectId,
    ref: "user",
  },
  details: {
    modelNumber: Number,
    hardcover: Boolean,
    reviews: Number,
    rank: Number,
  },
});

module.exports = mongoose.model("Book", BookSchema);
