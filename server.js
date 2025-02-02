const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log("web server is listening at port " + port);
  console.log("http://localhost:${port}/");
});
