var express = require("express");
var router = express.Router();
const userCtrl = require("../controllers/userController");

//insert
router.post("/insert", userCtrl.upload, userCtrl.addUser);

//details for particular user
router.get("/details/:id", userCtrl.getUser);

//details (fetch all user)
router.get("/fetchall", userCtrl.getAllUser);
//update
router.put("/update/:id", userCtrl.upload, userCtrl.updateUser);

//delete
router.delete("/delete/:id", userCtrl.deleteUser);

//image
router.get("/image/:id", userCtrl.getImage);

module.exports = router;
