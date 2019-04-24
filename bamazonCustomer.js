
var inquirer = require("inquirer");
var mysql = require("mysql");



var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jenyz543210",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start()
});

function start() {
  inquirer
    .prompt({
      name: "yesorno",
      type: "list",
      message: "Would you like to purchase an item from Bamazon?",
      choices: ["YES", "NO"]
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.yesorno === "YES") {
        seeItems();
      } else {
        connection.end();
        console.log("Come again when you are ready to purchase")
      }
    });
}
function seeItems() {
  connection.query("SELECT * FROM items", function (err, results) {
    if (err) throw err;
    console.log(results);
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
            }
            return choiceArray;
          },
          message: "What item would you like to purchase?"
        },
        {
          type: "confirm",
          name: "howMany",
          message: "How many would you like to purchase?"
        }
      ])
      .then(function (answer) {
        for (var i = 0; i < results.length; i++) {
          if (parseInt(answer.items) === parseInt(results[i].item_name)) {
            chosenItem = answer.howMany * parseFloat(results[i].price);
            updatedStock = parseInt(results[i].stock_quantity) - parseInt(answer.howMany);
            if (answer.howMany > results[i].stock_quantity) {
              console.log("We don't have enough!");
              seeItems();
            } else {
              connection.query("UPDATE items SET ? WHERE ?", [
                { stock_quantity: newStock },
                { item_name: results[i].item_name }
              ], function (err) {
                if (err) throw err;
              });
            }
          };

        }
      });
    });
  };













