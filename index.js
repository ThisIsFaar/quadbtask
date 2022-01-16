const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./models");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api routes
app.use("/api", apiRoutes);

//static images folder
app.use("/Images", express.static("./Images"));

//PORT
const port = process.env.PORT || 5000;

//Server Listen
app.listen(port, () => console.log(`listening on port ${port}...`));
