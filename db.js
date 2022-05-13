const mysql = require("mysql2");

//DB CONFIG
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

//DB CONNECTION
db.connect((error) => {
  console.log("Host ->" + process.env.DB_HOST);
  console.log("User ->" + process.env.DB_USER);
  console.log("Password ->" + process.env.DB_PASSWORD);
  console.log("Database ->" + process.env.DB_NAME);
  console.log("Port ->" + process.env.DB_PORT);
  if (error) {
    console.log(error);
  } else {
    console.log("DB Connected");
  }
});

module.exports = db;
