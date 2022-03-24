const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "Mm0122629004", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
