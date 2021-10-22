const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controllers/user');

router.get('/user/', getAllUsers )

router.post('/user/', createUser);

module.exports = router;