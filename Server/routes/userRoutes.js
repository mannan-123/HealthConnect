const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/users", userController.addPatients);
router.get("/users", userController.getAllPatients);
// update and delete students on tha base of thier Id
router.put("/users/:id", userController.updatePatients);
router.delete("/users/:id", userController.deletePatients);

module.exports = router;
