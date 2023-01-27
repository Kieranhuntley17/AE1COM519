require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const employeeController = require("./controllers/employees");
const employees = require("./models/employees");
app.set("view engine", "ejs");
app.use(express.static("public"));

const { WEB_PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log("MongoDB connection error. Please make sure MongoDB is running.");
  process.exit();
});

app.get("/", employeeController.list);

app.get("/employees", employeeController.list);

app.get("/employees/:id", employeeController.individual);

app.get("/employees/delete/:id", employeeController.delete);

app.post("/create-employee", employeeController.create);

/*app.get("/employees/:id", (req, res) => {
  res.render("individual");
});




/*app.get("/employees", (req, res) => {
  res.render("employees");
});*/

app.listen(WEB_PORT, () => {
  console.log(`Example app listening at http://localhost:${WEB_PORT}`);
});







