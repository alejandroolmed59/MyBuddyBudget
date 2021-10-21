const { Sequelize } = require('sequelize');
const { postgre } = require('../config/config');

const sequelize = new Sequelize(`postgres://${postgre.user}:${postgre.password}@${postgre.host}:${postgre.port}/${postgre.database}`)
console.log(sequelize);
/*
const pool = new Pool({
  user: postgre.user,
  host: postgre.host,
  database: postgre.database, 
  password: postgre.password, 
  port: postgre.port
});*/



module.exports = sequelize;
