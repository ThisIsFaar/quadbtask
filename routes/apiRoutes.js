var express = require("express");
var router = express.Router();
const userCtrl = require("../controllers/userController");

//insert
router.post("/insert", userCtrl.upload, userCtrl.addUser);

//details
router.get("/details/:id", userCtrl.getUser);

//update
router.put("/update/:id", userCtrl.updateUser);

//delete
router.delete("/delete/:id", userCtrl.deleteUser);

//image
router.get("/image/:id", userCtrl.getImage);

module.exports = router;
