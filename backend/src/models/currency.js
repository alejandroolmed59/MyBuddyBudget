const pgdb = require('../util/posgre-database');

const Currency = {};

Currency.create = (data) => {
  return new Promise((resolve, reject) => resolve(true));
}

Currency.findById = (data) => {
  return new Promise((resolve, reject) => resolve({rows:[]}));
}

Currency.fetchAll = () => {
  return new Promise((resolve, reject) => resolve({rows:[]}));
}

module.exports = Currency;