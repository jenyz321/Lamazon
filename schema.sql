DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE items(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(75) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) default 0,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES 
("Cheez-it","Groceries",4.89,30),
("ProActiv", "Health and Beauty",30.00,15),
("Apple AirPods","Electronics",199.00,2),
("Lunch box","Coolers",12.99,10),
("Fleece Blanket","Home Goods",22.99,18),
("The Declaration of Independence","Undeliverables",5000000.00,1),
("America United","Fantasy",2.00,1),
("12 Pack Coke Zero","Groceries",5.59,3),
("Apple Watch","Electronics",500.00,30),
("Huggies Diapers","Babies",25.99,100);