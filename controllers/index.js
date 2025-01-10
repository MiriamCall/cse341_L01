const { get } = require("../routes");

const getName = (req, res) => {
  res.send("Rachel Bowden");
};

module.exports = { getName };
