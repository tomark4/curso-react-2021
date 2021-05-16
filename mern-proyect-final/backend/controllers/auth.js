const { response } = require('express');
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

const register = async (req, res = response) => {
  try{
    const { name, email, password } = req.body;

    // validar que el email no exista
    let usuario = await Usuario.findOne({email});

    if(usuario){
      return res.status(400).json({
        ok: false,
        message: 'usuario existe con ese correo'
      });
    }

    // crear si no existe
    usuario = new Usuario({name, email, password});

    // encriptar la constraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync( password, salt);
    await usuario.save();

    return res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      message: 'user created'
    });

  } catch(err){
    console.log(err);
    return res.status(500).json({
      ok: false,
      message: 'error, contact support'
    });
  }

}


const login = async (req, res = response) => {
  try{
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({email});

    if(!usuario){
      return res.status(400).json({
        ok: false,
        message: 'Usuario y contraseña no son correctos 1'
      });
    }

    // confirmar los password
    const validPassword = bcrypt.compareSync(password, usuario.password);

    if(!validPassword){
      return res.status(400).json({
        ok: false,
        message: 'Usuario y contraseña no son correctos 2'
      });
    }

    // TODO: generate JWT

    return res.status(200).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      message: 'login success',
    });

  } catch(err){
    console.log(err);
    return res.status(500).json({
      ok: false,
      message: 'error contact support'
    });
  }
}


const refreshToken = (req, res = response) => {
  return res.json({ok: true, message: 'refresh token'});
}


module.exports = {
  register,
  login,
  refreshToken
};
