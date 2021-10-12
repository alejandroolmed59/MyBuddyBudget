const firebase = require('../services/firebase')

const firebaseGuard = async (req, res, next) => {
  console.log('firebaseGuard...')
  next();
};

module.exports = firebaseGuard;