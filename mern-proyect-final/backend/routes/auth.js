const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');
const {check} = require("express-validator");
const validateFields = require('../middlewares/validate-fields');

// register user
router.post("/register",[
  check('name','Name is required').not().isEmpty(),
  check('email','Email is required').isEmail(),
  check('password','Password must have 6 characters').isLength({min: 6}),
  validateFields
], controller.register);

// login user
router.post("/login", [
  check('email','Email is required').isEmail(),
  check('password','Password must have 6 characters').isLength({min: 6}),
  validateFields
], controller.login);

// refresh token
router.get("/refresh-token", controller.refreshToken);


module.exports = router;
