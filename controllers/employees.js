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

//edit name
exports.editname = async (req, res) => {
  const id = req.params.id;
  const employees = await Employees.find({_id : id});

  try {
    console.log(employees)
    console.log(req.body.editname)
    await Employees.updateOne({ _id : employees }, { name : req.body.editname });
    res.redirect(`/employees/${id}`);
    console.log("name updated");
  } 
  catch (e) {
    console.log(e);
    res.status(404).send({
      message: `could not find employee.`,
    });
  }
};
////////////////////////////////////////////////////////////////////////////////////

//edit position
exports.editposition = async (req, res) => {
  const id = req.params.id;
  const employees = await Employees.find({_id : id});

  try {
    console.log(employees)
    console.log(req.body.editname)
    await Employees.updateOne({ _id : employees }, { position : req.body.editposition });
    res.redirect(`/employees/${id}`);
    console.log("position updated");
  } 
  catch (e) {
    console.log(e);
    res.status(404).send({
      message: `could not find employee.`,
    });
  }
};
////////////////////////////////////////////////////////////////////////////////////

//edit Mobile
exports.editmobile = async (req, res) => {
  const id = req.params.id;
  const employees = await Employees.find({_id : id});

  try {
    console.log(employees)
    console.log(req.body.editmobile)
    await Employees.updateOne({ _id : employees }, { mobile : req.body.editmobile });
    res.redirect(`/employees/${id}`);
    console.log("mobile updated");
  } 
  catch (e) {
    console.log(e);
    res.status(404).send({
      message: `could not find employee.`,
    });
  }
};
////////////////////////////////////////////////////////////////////////////////////

//edit Hours
exports.edithours = async (req, res) => {
  const id = req.params.id;
  const employees = await Employees.find({_id : id});

  try {
    console.log(employees)
    console.log(req.body.edithours)
    await Employees.updateOne({ _id : employees }, { agreedhours : req.body.edithours });
    res.redirect(`/employees/${id}`);
    console.log("hours updated");
  } 
  catch (e) {
    console.log(e);
    res.status(404).send({
      message: `could not find employee.`,
    });
  }
};
////////////////////////////////////////////////////////////////////////////////////

//edit email
exports.editemail = async (req, res) => {
  const id = req.params.id;
  const employees = await Employees.find({_id : id});

  try {
    console.log(employees)
    console.log(req.body.editemail)
    await Employees.updateOne({ _id : employees }, { email : req.body.editemail });
    res.redirect(`/employees/${id}`);
    console.log("email updated");
  } 
  catch (e) {
    console.log(e);
    res.status(404).send({
      message: `could not find employee.`,
    });
  }
};
////////////////////////////////////////////////////////////////////////////////////


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

