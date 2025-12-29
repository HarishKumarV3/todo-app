require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB1_HOST,
  user: process.env.DB1_USER,
  password: process.env.DB1_PASSWORD,
  database: process.env.DB1_NAME
});

// db.connect(err => {
//   if (err) {
//     console.error('DB connection failed:', err);
//     return;
//   }
//   console.log('MySQL connected');

  // db.query("CREATE DATABASE mydb", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });

  // let sql = "CREATE TABLE customers (Cust_id INT AUTO_INCREMENT PRIMARY KEY, Cust_name VARCHAR(255), Cust_age INT(30))";
  // db.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

  // let sql1 = "INSERT INTO customers (Cust_id, Cust_name, Cust_age) VALUES (10, 'Harish', 22)";
  // db.query(sql1, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  // let sql2 = "INSERT INTO customers (Cust_id, Cust_name, Cust_age) VALUES ?";
  // let values = [
  //   [12,'Ashok', 22],
  //   [13,'Arun', 25],
  //   [14,'Karthik', 24]
  // ];

  // db.query(sql2, [values], (err, result) => {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });

  // db.query("SELECT * FROM customers", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // let age=22;
  // db.query("SELECT * FROM customers WHERE Cust_age = " + mysql.escape(age), function (err, result) {
  // if (err) throw err;
  // console.log(result);
  // });

  // let name = 'Ashok';
  // let sql3 = 'SELECT * FROM customers WHERE Cust_name = ?';
  // db.query(sql3, [name], function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // let sql4 = "DELETE FROM customers WHERE Cust_name = 'Ashok'";
  // db.query(sql4, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);
  // });

  // let sql = "UPDATE customers SET Cust_name = 'Hari' WHERE Cust_id = 10";
  // db.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });

// });
module.exports = db;