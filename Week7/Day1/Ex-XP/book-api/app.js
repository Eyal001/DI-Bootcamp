const express = require("express");
const { booksRouter } = require("./routes/booksRoutes.js");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// app.use(bookRouter)
app.use("/api", booksRouter);
