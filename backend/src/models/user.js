const sequelize = require('../util/posgre-database');
const {  DataTypes } = require('sequelize');

const UsuarioModel = sequelize.define('usuario', {
  // Model attributes are defined here
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey:true
  },
  correo: {
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

const Usuario = {};

Usuario.create = (usuario, correo) => {
  return UsuarioModel.create({
    usuario,
    correo,
    add_fecha: new Date()
  })
}


Usuario.fetchAll = () => {
  return UsuarioModel.findAll();
}

module.exports = {
  Usuario,
  UsuarioModel
};