const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require("../middleware/auth");
const checkAdmin = require("../middleware/checkAdmin")

router.post("/updatePwd", UserController.updatePwd);
router.post("/updateContact", UserController.updateContact);
router.post("/login", UserController.loginUser);
router.post('/newUser', UserController.createUser);
router.get("/userDetails", UserController.getDetails);
router.post("/submit", UserController.submitForm);
router.get("/getUsers", UserController.getUsers);
router.delete("/deleteUser", UserController.deleteUser);

module.exports=router;