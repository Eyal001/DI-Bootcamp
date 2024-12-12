const express = require("express");
const { fetchPosts } = require("./data/dataService");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log("Data has been successfully retrieved.");
  } catch (error) {
    res.status(500).send("Error fetching posts");
  }
});
