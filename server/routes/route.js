const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const { createRepo } = require("../controllers/createRepo.js");

router.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

router.get("/userinfo", userController.getUserInfo);
router.post("/create", createRepo);
router.get("/profile", userController.getProfile);

module.exports = router;
