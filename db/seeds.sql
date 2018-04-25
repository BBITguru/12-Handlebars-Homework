DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
id INT PRIMARY KEY AUTO_INCREMENT,
  burger_name VARCHAR
(60) NOT NULL,
  devoured BOOLEAN
);
INSERT INTO burgers
  (burger_name, devoured)
VALUES
  ("Bacon Mushroom Swiss Burger", FALSE),
  ("Jalapaño Avocado Cheddar Burger", FALSE),
  ("Pepperjack Double Bacon Burger", FALSE)
;



