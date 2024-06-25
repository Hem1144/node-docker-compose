const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(
    "Welcome to my docker-compose application " +
      process.env.APP +
      " db_name " +
      process.env.DB_NAME
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
