const sequelize = require('../util/posgre-database');
const {  DataTypes } = require('sequelize');

const AccountTypeModel = sequelize.define('cuenta_tipo', {
  // Model attributes are defined here
  cuenta_tipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true
  },
  descripcion: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  add_fecha:{
    type: DataTypes.DATE
  }
},{
  timestamps:false,
  freezeTableName:true
});

const AccountType = {};

AccountType.create = (data) => {
}

AccountType.findById = (data) => {
}

AccountType.fetchAll = () => {
  return AccountTypeModel.findAll();
}

module.exports = AccountType;