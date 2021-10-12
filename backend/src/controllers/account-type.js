const AccountType = require('../models/account-type');

module.exports.createAccountType =  (req, res, next) => {
  const args = [req.body.description];
  AccountType.create(args)
  .then(() => res.status(200).json({ valid: true, message: 'Account type created!' }))
  .catch((e) => res.status(400).json({ valid: false, message: e }));
}

module.exports.getAccountType = (req, res, next) => {
  const args = [parseInt(req.params.id, 10)];
  AccountType.findById(args)
  .then(({rows}) => {
    res.status(200).json({ valid: true, data: rows })
  })
  .catch((e) => res.status(400).json({ valid: false, message: e }));
}

module.exports.getAccountsType = async(req, res, next) => {
  try{
    const result = await AccountType.fetchAll();
    res.status(200).json(result)
  }catch(e){
    res.status(400).json({message: e });
  }

}