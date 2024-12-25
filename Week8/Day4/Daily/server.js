const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  const { inputValue } = req.body;
  console.log("Received input:", inputValue);
  res.json({
    message: `I received your POST request. This is what you sent me: ${inputValue}`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
