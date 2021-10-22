const {Account} = require('../models/account');

module.exports.createAccount =  async(req, res, next) => {
  const body = req.body;
  try{
    const created = await Account.create(body);
    console.log(created);
    res.status(200).json({message:"Cuenta creada!"})
  }catch(e){
    res.status(400).json({message: e });
  }
}

module.exports.getAccountsByUser = async(req, res, next) => {
  const userName = req.params.userName;
  console.log('Entro!', userName)
  try{
    const result = await Account.findAccountsByUser(userName)
    res.status(200).json(result)
  }catch(e){
    res.status(400).json({message: e });
  }
}

module.exports.getAccounts = async(req, res, next) => {
  try{
    const result = await Account.fetchAll();
    res.status(200).json(result)
  }catch(e){
    res.status(400).json({message: e });
  }
}
