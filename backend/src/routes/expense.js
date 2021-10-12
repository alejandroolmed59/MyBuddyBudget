const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expense');

router.get('/expense/', ExpenseController.getAllExpenses);

router.get('/expense/:id', ExpenseController.getOneExpense);

//router.post('/account-type', ExpenseController.createExpense);

module.exports = router;