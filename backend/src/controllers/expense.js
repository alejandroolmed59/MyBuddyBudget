const {Expense} = require('../models/expense');
const {Account} = require('../models/account')

//TODO NOT WORKING CREATE
module.exports.createExpense =  async(req, res, next) => {
  console.log(req.body);
  const {descripcion, precio, usuario, expense_categoria} = req.body;
  try{
    const created = await Expense.create(descripcion, precio, usuario, expense_categoria);
    console.log(created);
    res.status(200).json({message:"Tipo de cuenta creado!"})
  }catch(e){
    console.log(e)
    res.status(400).json({message: e });
  }
}

module.exports.createExpenseAndDeduceFromWallet =  async(req, res, next) => {
  const {descripcion, precio, usuario, expense_categoria, walletid} = req.body;
  try{
    const created = await Expense.create(descripcion, precio, usuario, expense_categoria);
    await Account.modifyWalletBalance(walletid, precio);
    console.log(created);
    res.status(200).json({message:"Tipo de cuenta creado!"})
  }catch(e){
    console.log(e)
    res.status(400).json({message: e });
  }
}

module.exports.getExpensesByUser = async(req, res, next) => {
  const userName = req.params.userName;
  try{
    const result = await Expense.findExpensesByUser(userName)
    res.status(200).json(result)
  }catch(e){
    res.status(400).json({message: e });
  }
}

module.exports.getOneExpense = async(req, res, next) => {
  //const args = [parseInt(req.params.id, 10)];
  try{
    const result = await Expense.findById(req.params.id)
    if(!result) throw new Error("Expese doesn't exist")
    res.status(200).json(result)
  }catch(e){
    res.status(400).json({message: e });
  }
}

module.exports.getAllExpenses = async(req, res, next) => {
  try{
    const result = await Expense.fetchAll();
    res.status(200).json(result)
  }catch(e){
    res.status(400).json({message: e });
  }

}