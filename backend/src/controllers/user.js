const {Usuario} = require('../models/user');

module.exports.createUser = async(req, res, next) => {
  const {usuario, correo} = req.body;
  try{
    const created = await Usuario.create(usuario, correo);
    res.status(200).json({message:"Tipo de cuenta creado!", created})
  }catch(e){
    res.status(400).json({message: e });
  }
}

module.exports.getAllUsers = async(req, res, next) => {
  try{
    const result = await Usuario.fetchAll();
    res.status(200).json(result)
  }catch(e){
    res.status(400).json({message: e });
  }
}