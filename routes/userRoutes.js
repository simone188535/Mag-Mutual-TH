const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUsersInDateRange,
  getUsersOfProfession,
} = require("../controllers/userControllers");

router.route("/email").get(getUserByEmail);
router.route("/date-between").get(getUsersInDateRange);
router.route("/profession").get(getUsersOfProfession);
router.route("/:id").get(getUserById);
router.route("/").get(getAllUsers);

module.exports = router;
