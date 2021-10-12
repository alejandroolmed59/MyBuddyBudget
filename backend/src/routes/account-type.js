const express = require('express');
const router = express.Router();
const { createAccountType, 
        getAccountType, 
        getAccountsType } = require('../controllers/account-type');

router.get('/account-type', getAccountsType);

router.get('/account-type/:id', getAccountType);

router.post('/account-type', createAccountType);

module.exports = router;