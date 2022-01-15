const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("mydb", "root", "Password@1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
