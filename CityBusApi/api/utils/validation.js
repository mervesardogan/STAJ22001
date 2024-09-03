// api/utils/validation.js
const { check, validationResult } = require('express-validator');

exports.validateBus = [
  check('route').isString().notEmpty(),
  check('capacity').isNumeric().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];