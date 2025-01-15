const jwt = require("jsonwebtoken");
require("dotenv").config();

const { ACCESS_TOKEN_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.cookies["token"]; //
  if (!token) {
    res.status(401).json({ message: "unauthorized" });
    return;
  }
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) {
      res.status(403).json({ message: "forbidden" }, error);
      return;
    }
    console.log(decode);

    req.user = decode;
    next();
  });
};

module.exports = {
  verifyToken,
};