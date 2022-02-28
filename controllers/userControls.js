const User = require("../models/userModal");

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      message: "data added successfully.",
      user: result,
    });
  });
};

exports.getUsers = (req, res) => {
  const users = User.find()
    .select("_id name age")
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

exports.singleUser = (req, res) => {
  User.findOne({
    _id: req.params.id,
  }).exec((err, user) => {
    if (err) {
      res.send("Error occured");
    }
    res.json(user);
  });
};
