const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {

  // x-token headers
  const token = req.header("x-token");
  if(!token){
    return res.status(401).json({
      ok: false,
      message: 'unauthorized'
    });
  }

  try{
    const {uid, name} = jwt.verify(token, process.env.SECRET_JWT);

    req.uid = uid;
    req.name = name;

    next();

  } catch(err){
    console.log(err);
    return res.status(401).json({
      ok: false,
      message: 'token invalid'
    });
  }
}

module.exports = {
  validateJWT
}
