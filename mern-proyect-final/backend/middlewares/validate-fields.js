const { response } = require("express");
const { validationResult } = require("express-validator");

const validateFields = (req, res = response, next) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({
      ok: false,
      message: "error",
      errors: errors.mapped()
    });
  }

  return next();
}

module.exports = validateFields;
