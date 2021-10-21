const sequelize = require('../util/posgre-database');
const {  DataTypes } = require('sequelize');

const ExpenseTypeModel = sequelize.define('expense_categoria', {
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
  },
  img:{
    type: DataTypes.STRING
  }
},{
  timestamps:false,
  freezeTableName:true
});

const ExpenseCategoria = {};

ExpenseCategoria.create = (data) => {
  console.log(data)
  return ExpenseTypeModel.create(data)
}

ExpenseCategoria.findById = (data) => {
  return ExpenseTypeModel.findByPk(data);
}

ExpenseCategoria.fetchAll = () => {
  return ExpenseTypeModel.findAll({include:["Expenses"]});
}

module.exports = {
  ExpenseTypeModel,
  ExpenseCategoria
};