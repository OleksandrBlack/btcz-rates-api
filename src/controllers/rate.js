const safeRates = require('../services/safeRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling SAFE Rate information from APIs');
  safeRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
