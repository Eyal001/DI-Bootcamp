const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());

// Simulated database (array of blog posts)
let posts = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
  },
];

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id == id);
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  res.status(200).json(post);
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ msg: "Title and content are required" });
  }
  const newPost = { id: posts.length + 1, title: title, content: content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const postIndex = posts.findIndex((p) => p.id == id);

  if (postIndex === -1) {
    return res.status(404).json({ msg: "Post not found." });
  }
  if (!title || !content) {
    return res.status(400).json({ msg: "Title and content are required" });
  }
  posts[postIndex] = { id, title, content };
  res.status(200).json(posts[postIndex]);
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((p) => p.id == id);
  if (postIndex === -1) {
    return res.status(404).json({ msg: "Post not found." });
  }
  posts.splice(postIndex, 1);
  res.status(200).json({ msg: "Post deleted successfully" });
});
