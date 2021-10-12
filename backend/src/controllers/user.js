const User = require('../models/user');

module.exports.createUser = (req, res, next) => {
  res.status(200).json({ valid: true, message: 'createUser' })
}