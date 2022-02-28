const express = require("express");
const {
  getUsers,
  createUser,
  singleUser,
} = require("../controllers/userControls");

const router = express.Router();

router.post("/create_post", createUser);

router.get("/users", getUsers);

router.get("/user/:id", singleUser);

module.exports = router;
