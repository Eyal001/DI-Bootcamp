const { db } = require("../config/knex");

const getAllUsers = () => {
  return db("users")
    .select("id", "email", "username", "first_name", "last_name")
    .orderBy("username");
};
const getUserByUsername = (username) => {
  return db("users").where({ username }).first();
};

const createUser = (email, username, first_name, last_name) => {
  return db("users").insert({ email, username, first_name, last_name });
};

const createHashPassword = (username, password) => {
  return db("hashpwd").insert({ username, password });
};

const getUserWithId = (id) => {
  return db("users").where({ id }).first();
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  createUser,
  createHashPassword,
  getUserWithId,
};
