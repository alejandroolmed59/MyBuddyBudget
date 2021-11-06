const express = require('express');
const router = express.Router();
const { createAccount, 
        getAccountsByUser, 
        getAccounts,
        transferWallet } = require('../controllers/account');

router.post('/account', createAccount);

router.post('/account/transfer', transferWallet);

router.get('/account/:userName', getAccountsByUser);

router.get('/account', getAccounts);

module.exports = router;