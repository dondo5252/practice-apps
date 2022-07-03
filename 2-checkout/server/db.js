const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
     db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id VARCHAR(255) Not NULL PRIMARY KEY,
        s_id VARCHAR(255) NOT NULL,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL,
        password VARCHAR(30) NOT NULL,
        lineOne VARCHAR(30) NOT NULL,
        lineTwo VARCHAR(30) NOT NULL,
        state VARCHAR(30) NOT NULL,
        zip VARCHAR(30) NOT NULL,
        phoneNum VARCHAR(30) NOT NULL,
        CCNum VARCHAR(30) NOT NULL,
        expDate VARCHAR(30) NOT NULL,
        CVV VARCHAR(30) NOT NULL,
        billingZip VARCHAR(30) NOT NULL
           )`
    )
  )
  .catch((err) => console.log(err, "errorr in db.js"));


module.exports = db;


