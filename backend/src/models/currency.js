const sequelize = require("../util/posgre-database");
const { DataTypes } = require("sequelize");

const CurrencyModel = sequelize.define(
  "moneda",
  {
    // Model attributes are defined here
    moneda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    add_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const Currency = {};

Currency.create = (descripcion) => {
  return CurrencyModel.create({
    descripcion,
    add_fecha: new Date(),
  });
};

Currency.findById = (data) => {
  return CurrencyModel.findByPk(data);
};

Currency.fetchAll = () => {
  return CurrencyModel.findAll({
    include:["type"]
  });
};

module.exports = {
  Currency,
  CurrencyModel
};
