const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/patient", userController.Signup);
router.post("/login", userController.Login);
router.get("/patient", userController.getUser);
router.put("/patient/:id", userController.updateUser);
router.delete("/patient/:id", userController.deleteUser);

module.exports = router;

