const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());
app.use(morgan("common"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "Entry file",
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
});
