var db = require("../models");
const Users = db.users;
const Joi = require("joi");
const multer = require("multer");
const path = require("path");

//Image Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("user_image");

//insert user
const addUser = async (req, res) => {
  const result = validateUser(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  try {
    let data = await Users.create({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: req.body.password,
      user_image: req.file.path,
      total_orders: req.body.total_orders,
    });
    //   await data.save();
    let response = {
      data: "Inserted successfully",
    };
    res.status(200).json(response);
  } catch (err) {
    res.status(404).send("error: " + err);
  }
};

//get user
const getUser = async (req, res) => {
  Users.findAll().then((data) => {
    const users = data;
    const user = users.find((c) => c.user_id === req.params.id);
    res.send("data:" + JSON.stringify(user));
  });
};

//update user
const updateUser = async (req, res) => {
  const result = validateUser(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  try {
    const data = await Users.update(
      {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.password,
        total_orders: req.body.total_orders,
      },
      {
        where: {
          user_id: req.params.id,
        },
      }
    );
    let response = {
      data: "Updated successfully",
    };
    res.status(200).json(response);
  } catch (err) {
    res.status(404).send("error: " + err);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    await Users.destroy({
      where: {
        user_id: req.params.id,
      },
    });
    let response = {
      data: "Deleted successfully",
    };
    res.status(200).json(response);
  } catch (err) {
    res.status(404).send("error: " + err);
  }
};

//getImage
const getImage = async (req, res) => {
  Users.findAll({
    attributes: ["user_image", "user_id"],
  }).then((data) => {
    const users = data;
    const user = users.find((c) => c.user_id === req.params.id);
    res.send("data:" + JSON.stringify(user.user_image));
  });
};

function validateUser(user) {
  //If invalid, return 404 - Bad request
  const schema = Joi.object({
    user_name: Joi.string().alphanum().min(4).required(),
    user_email: Joi.string().email(),
    password: Joi.string().min(4).required(),
    total_orders: Joi.number().integer().required(),
  });
  const result = schema.validate(user);
  return result;
}
module.exports = { addUser, getUser, updateUser, deleteUser, upload, getImage };
