const express = require("express");
const router = express.Router();
router.post("/signup", (req, res) => {
  const signedUp = new SignUp({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  signedUp
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
