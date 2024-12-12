const axios = require("axios");

const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error fetching posts: ", error);
    throw error;
  }
};

module.exports = { fetchPosts };
