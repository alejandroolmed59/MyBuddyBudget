const { Currency } = require("../models/currency");

module.exports.createCurrency = (req, res, next) => {
  const args = [req.body.description];
  Currency.create(args)
    .then(() =>
      res.status(200).json({ valid: true, message: "Currency created!" })
    )
    .catch((e) => res.status(400).json({ valid: false, message: e }));
};

module.exports.getCurrency = (req, res, next) => {
  const args = [parseInt(req.params.id, 10)];
  Currency.findById(args)
    .then(({ rows }) => {
      res.status(200).json({ valid: true, data: rows });
    })
    .catch((e) => res.status(400).json({ valid: false, message: e }));
};

module.exports.getCurrencies = async (req, res, next) => {
  try {
    const result = await Currency.fetchAll();
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
