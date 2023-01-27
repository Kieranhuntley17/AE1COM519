const employees = require("../models/employees");
const Employees = require("../models/employees");

exports.list = async (req, res) => {
  try {
    const employees = await Employees.find({});
    res.render("employees", { employees : employees });
  } 
  catch (e) {
    console.log("didnt work")
    res.status(404).send({ message: "could not list employees" });
  }
};

exports.individual = async (req, res) => {
    try {
        const id = res.req.params.id;
        console.log(id)
        const employees = await Employees.find({_id : id});
        res.render("individual", { employees : employees });
        console.log("worked")
    } 
    catch (e) {
        console.log("didnt work")
        res.status(404).send({ message: "could not list employees" });
    }
};

exports.delete = async (req, res) => {
  var id = req.params.id;

  try {
    await Employees.findByIdAndRemove(id);
    res.redirect("/employees");
    console.log(id)
  } 
  catch (e) {
    res.status(404).send({
      message: `could not delete employee ${id}.`,
    });
  }
};

exports.create = async (req, res) => {
  let createEmployee = new Employees({name:req.body.name});
  try {
    await createEmployee.save();
    res.redirect(`/?message=employee ${req.body.name} created`);
  }
  catch (e) {
    if (e.errors) {
      console.log(e.errors)
      return res.render("employees", { errors:e.errors });
    }
      res.status(400).send({
      message: `could not create employee.`
    });
  }
};
