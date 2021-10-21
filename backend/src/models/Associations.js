const {AccountTypeModel} = require('./account-type')
const {AccountModel} = require('./account')
const {CurrencyModel} = require('./currency')
const {ExpenseModel} = require('./expense');
const {ExpenseTypeModel} = require('./expense-type');

AccountModel.belongsTo(AccountTypeModel,{
    foreignKey: {name:"cuenta_tipo"},
    as:"CuentaTypoObj"
});

AccountModel.belongsTo(CurrencyModel,{
    foreignKey: {name:"moneda"},
    as:"MonedaObj"
})
ExpenseModel.belongsTo(ExpenseTypeModel,{
    foreignKey:"expense_categoria",
    as:"CategoriaExpenseObj"
})
ExpenseTypeModel.hasMany(ExpenseModel,{
    foreignKey:"expense_categoria",
    as:"Expenses"
})