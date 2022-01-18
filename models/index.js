const { forbidden } = require("joi");
const { Sequelize, DataTypes } = require("sequelize");

// establishing connection
const sequelize = new Sequelize("mydb", "root", "Password@1234", {
  host: "localhost",
  dialect: "mysql",
});

//checking connection is ready or not?
sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("err: " + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("resynced!");
});

module.exports = db;
