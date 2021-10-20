const sequelize = require('../util/posgre-database');
const {  DataTypes } = require('sequelize');

const ExpenseModel = sequelize.define('expense_categoria', {
  // Model attributes are defined here
  expense_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull:false
    // allowNull defaults to true
  }
},{
  timestamps:false,
  freezeTableName:true
});

const ExpenseCategoria = {};

ExpenseCategoria.create = (data) => {
  console.log(data)
  return ExpenseModel.create(data)
}

ExpenseCategoria.findById = (data) => {
  return ExpenseModel.findByPk(data);
}

ExpenseCategoria.fetchAll = () => {
  return ExpenseModel.findAll();
}

module.exports = ExpenseCategoria;