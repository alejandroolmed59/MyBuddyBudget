const sequelize = require('../util/posgre-database');
const {  DataTypes } = require('sequelize');

const AccountTypeModel = sequelize.define('cuenta_tipo', {
  // Model attributes are defined here
  cuenta_tipo: {
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
  add_fecha:{
    type: DataTypes.DATE,
    allowNull:false
  }
},{
  timestamps:false,
  freezeTableName:true
});

const AccountType = {};

AccountType.create = (descripcion) => {
  console.log(descripcion)
  return AccountTypeModel.create({descripcion,add_fecha: new Date() })
}

AccountType.findById = (data) => {
  return AccountTypeModel.findByPk(data);
}

AccountType.fetchAll = () => {
  return AccountTypeModel.findAll();
}

module.exports = {
  AccountTypeModel,
  AccountType
} ;
