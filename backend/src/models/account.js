const sequelize = require('../util/posgre-database');
const { DataTypes } = require('sequelize');

const AccountModel = sequelize.define('cuenta', {
  // Model attributes are defined here
  cuenta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull:false
  },
  cuenta_tipo: {
    type: DataTypes.INTEGER,
    allowNull:false,
    defaultValue:1
  },
  moneda:{
    type: DataTypes.INTEGER,
    allowNull:false,
    defaultValue:1
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull:false,
    defaultValue:'olme59'
  },
  add_fecha:{
    type: DataTypes.DATE,
    allowNull:false
  }
},{
  timestamps:false,
  freezeTableName:true
});

const Account = {};

Account.create = ({descripcion,cuenta_tipo, moneda, usuario}) => {
  return AccountModel.create({
      descripcion,
      cuenta_tipo,
      moneda,
      usuario,
      add_fecha: new Date() })
}

Account.findById = (data) => {
  return AccountModel.findByPk(data);
}

Account.fetchAll = () => {
  return AccountModel.findAll();
}

module.exports = Account;