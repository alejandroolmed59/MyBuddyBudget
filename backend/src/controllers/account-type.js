const AccountType = require('../models/account-type');

module.exports.createAccountType =  async(req, res, next) => {
  console.log(req.body);
  const {descripcion} = req.body;
  try{
    const created = await AccountType.create(descripcion);
    console.log(created);
    res.status(200).json({message:"Tipo de cuenta creado!"})
  }catch(e){
    res.status(400).json({message: e });
  }
}

module.exports.getAccountType = async(req, res, next) => {
  //const args = [parseInt(req.params.id, 10)];
  try{
    const result = await AccountType.findById(req.params.id)
    res.status(200).json(result)
  }catch(e){
    res.status(400).json({message: e });
  }
}

module.exports.getAccountsType = async(req, res, next) => {
  try{
    const result = await AccountType.fetchAll();
    res.status(200).json(result)
  }catch(e){
    res.status(400).json({message: e });
  }

}