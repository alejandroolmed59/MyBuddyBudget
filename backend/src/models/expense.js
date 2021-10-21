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
  usuario:{ //TODO: UNIR TABLA
      type: DataTypes.STRING,
      allowNull:false
  },
 // expense_categoria:{ //TODO: UNIR TABLA
   //   type: DataTypes.INTEGER,
     // allowNull:false
  //}
},{
  timestamps:false,
  freezeTableName:true
});

const Expense = {};

Expense.create = (descripcion, precio, usuario, expense_categoria) => {
  return ExpenseModel.create({
    descripcion, 
    precio, 
    usuario, 
    expense_categoria})
}

Expense.findById = (data) => {
  return ExpenseModel.findByPk(data);
}

Expense.fetchAll = () => {
  return ExpenseModel.findAll({
    attributes: {exclude:"expense_categoria", include:"expense"},
    include:"CategoriaExpenseObj",
    
  });
}

module.exports = {
  Expense,
  ExpenseModel
};