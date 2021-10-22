const { Sequelize } = require('sequelize');
const { postgre } = require('../config/config');

const sequelize = new Sequelize(`postgres://${postgre.user}:${postgre.password}@${postgre.host}:${postgre.port}/${postgre.database}`)


module.exports = sequelize;
