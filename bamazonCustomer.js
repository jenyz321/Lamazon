
var inquirer = require("inquirer");
var mysql = require("mysql");



var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jenyz543210",
  database: "bamazon_DB"
});
console.log(connection);
connection.connect(function(err) {
    if (err) throw err;
    
  });
  