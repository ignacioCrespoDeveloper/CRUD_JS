const db = require("../db");

const userController = {
  createUser: (req, res) => {
    console.log("1891 Create users");
  },
  editUser: (req, res) => {
    console.log("1891 Edit users");
  },
  deleteUser: (req, res) => {
    console.log("1891 Delete users");
  },
  getUser: (req, res) => {
    console.log("1891 Get user");
  },
  getAllUsers: (req, res) => {
    console.log("1891 Get all Users");
    db.query("SELECT * FROM users", (error, users) => {
      if (error) {
        console.log(error);
      } else {
        console.log(users);
      }
    });
  },
};
module.exports = userController;
