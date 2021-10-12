const sequelize = require('../util/posgre-database');
const {  DataTypes } = require('sequelize');

const ExpenseModel = sequelize.define('expense', {
  // Model attributes are defined here
  expense: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull:false
    // allowNull defaults to true
  },
  precio:{
    type: DataTypes.NUMBER,
    allowNull:false
  },
  usuario:{
      type: DataTypes.STRING,
      allowNull:false
  },
  expense_categoria:{
      type: DataTypes.INTEGER,
      allowNull:false
  }
},{
  timestamps:false,
  freezeTableName:true
});

const Expense = {};

Expense.create = (data) => {
  console.log(data)
  return ExpenseModel.create(data)
}

Expense.findById = (data) => {
  return ExpenseModel.findByPk(data);
}

Expense.fetchAll = () => {
  return ExpenseModel.findAll();
}

module.exports = Expense;