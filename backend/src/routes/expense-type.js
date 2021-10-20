const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expense-type');

router.get('/expense-type/', ExpenseController.getAllExpenses);

module.exports = router;