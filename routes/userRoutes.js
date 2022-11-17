const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUsersInDateRange,
  getUsersOfProfession,
} = require("../controllers/userControllers");

router.route("/").get(getAllUsers);
router.route("/:id").get(getUserById);
router.route("/email/:email").get(getUserByEmail);
router.route("/date/:from-:to").get(getUsersInDateRange);
router.route("/profession/:profession").get(getUsersOfProfession);

module.exports = router;
