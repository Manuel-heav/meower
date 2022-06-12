const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("common"));

app.get("/", (req, res) => {
  res.json({
    message: "damn",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
