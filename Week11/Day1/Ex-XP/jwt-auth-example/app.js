const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter.js");
const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
  })
);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

app.use("/api/user", userRouter);
