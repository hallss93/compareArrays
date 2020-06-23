require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
import { NextFunction } from "express";

function verifyJWT(req: any, res: any, next: NextFunction) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.SECRET, (err: any, decoded: any) => {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

export default verifyJWT;
