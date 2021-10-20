const ExpenseCategoria = require('../models/expense-type');


module.exports.getAllExpenses = async(req, res, next) => {
    try{
      const result = await ExpenseCategoria.fetchAll();
      res.status(200).json(result)
    }catch(e){
      res.status(400).json({message: e });
    }
  
  }