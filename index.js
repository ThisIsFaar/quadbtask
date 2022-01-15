const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course" },
  { id: 3, name: "cours" },
  { id: 4, name: "cour" },
  { id: 5, name: "cou" },
];

//home
app.get("/", (req, res) => {
  res.send("hello world");
});

//all courses
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//single courses
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("not found");
  }
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const result = schema.validate(req.body);

  //validating data
  if (result.error) {
    res.status(400).send(result.error[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  //Look up the course
  //If not existing, return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The course with given id not found");
  }

  //validate
  const result = validateCourse(req.body);
  if (result.error) {
    res.status(400).send(result.error[0].message);
    return;
  }

  //Update course
  course.name = req.body.name;
  res.send(course);

  //Return the updated course
});

function validateCourse(course) {
  //If invalid, return 404 - Bad request
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  const result = schema.validate(course);
  return result;
}
//PORT
const port = process.env.PORT || 3000;

//Server Listen
app.listen(port, () => console.log(`listening on port ${port}...`));

// const sequelize = require("./util/database");

// const Customer = require("./models/customer");
// const Order = require("./models/order");

// Customer.hasMany(Order);

// let customerId = null;
// sequelize
//   .sync({ force: true })
//   // .sync()
//   .then((result) => {
//     return Customer.create({ name: "Chandler Bing", email: "cb@gmail.com" });
//     console.log(result);
//   })
//   .then((customer) => {
//     customerId = customer.id;
//     console.log("First Customer Created: ", customer);
//     return customer.createOrder({ total: 45 });
//   })
//   .then((order) => {
//     console.log("Order is : ", order);
//     return Order.findAll({ where: customerId });
//   })
//   .then((orders) => {
//     console.log("All the Orders are : ", orders);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
