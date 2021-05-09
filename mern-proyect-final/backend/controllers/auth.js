const { response } = require('express');

const register = (req, res = response) => {
  const { name, email, password } = req.body;

  return res.status(201).json({ok: true, message: 'register route', data: {name, email, password}});
}


const login = (req, res = response) => {
  const { email, password } = req.body;

  return res.status(200).json({ok: true, message: 'login route',data: {email, password}});
}


const refreshToken = (req, res = response) => {
  return res.json({ok: true, message: 'refresh token'});
}


module.exports = {
  register,
  login,
  refreshToken
};
