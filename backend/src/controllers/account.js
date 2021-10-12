const Account = require('../models/account');

module.exports.createAccount =  (req, res, next) => {
  res.status(200).json({ valid: true, message: 'createAccount' })
}

module.exports.getAccount = (req, res, next) => {
  res.status(200).json({ valid: true, message: 'getAccount' })
}

module.exports.getAccounts = (req, res, next) => {
  res.status(200).json({ valid: true, message: 'getAccounts' })
}
