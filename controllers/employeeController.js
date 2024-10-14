const Employee = require('../models/Employee');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.createEmployee = async (req, res) => {
  const { first_name, last_name, email, position, salary, date_of_joining, department } = req.body;

  try {
    const employee = new Employee({
      first_name, last_name, email, position, salary, date_of_joining, department
    });

    await employee.save();
    res.json({ message: 'Employee created successfully', employee_id: employee._id });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.eid);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee details updated successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.query.eid);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};