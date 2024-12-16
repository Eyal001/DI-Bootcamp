const express = require("express");
const { db } = require("./config/knex.js");
const cors = require("cors");
const { postsRouter } = require("./routes/postsRouter.js");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use("/api", postsRouter);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
