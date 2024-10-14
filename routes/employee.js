const express = require('express');
const router = express.Router();
const { getEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const auth = require('../middleware/auth');

router.get('/employees', auth, getEmployees);
router.post('/employees', auth, createEmployee);
router.get('/employees/:eid', auth, getEmployeeById);
router.put('/employees/:eid', auth, updateEmployee);
router.delete('/employees', auth, deleteEmployee);

module.exports = router;