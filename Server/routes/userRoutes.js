const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/students", userController.addStudent);
router.get("/students", userController.getAllStudent);
// update and delete students on tha base of thier Id
router.put("/students/:id", userController.updateStudent);
router.delete("/students/:id", userController.deleteStudent);

module.exports = router;
