const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const expressValidator = require("express-validator");

// variables
const dotenv = require("dotenv");
dotenv.config();

// DB connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log("DB Connected");
});
mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

const userRoutes = require("./routes/userRoute");

const app = express();

// middleware
app.use(morgan("dev"));
// app.use(expressValidator());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app is litening on port ${process.env.PORT}`);
});
