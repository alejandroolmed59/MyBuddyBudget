const {AccountTypeModel} = require('./account-type')
const {AccountModel} = require('./account')
const {CurrencyModel} = require('./currency')


AccountModel.belongsTo(AccountTypeModel,{
    foreignKey: {name:"cuenta_tipo"},
    as:"CuentaTypoObj"
});

AccountModel.belongsTo(CurrencyModel,{
    foreignKey: {name:"moneda"},
    as:"MonedaObj"
})
