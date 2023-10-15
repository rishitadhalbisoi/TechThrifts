<?php

echo 'hi';
$servername = "localhost";
$username = "root";
$password = "ryan1234";
$database = "TechThrifts";

// Establish a database connection
$db = new mysqli($servername, $username, $password, $database);

if ($con) {
    echo 'connected';
  } else {
    echo 'not connected';
  }

// Check for a connection error
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}


// Get form data
$user = $_POST["user"];
$type = $_POST["type"];
$size = $_POST["size"];
$cond = $_POST["condition"];
$price = $_POST["price"];
$desc = $_POST["desc"];

// Insert data into the database
$query = "INSERT INTO clothesCatalog (user, type, size, cond, price, desc) VALUES ('$user', '$type', '$size', '$cond', '$price', '$desc')";
if ($db->query($query) === TRUE) {
    echo "Data inserted successfully.";
} else {
    echo "Error: " . $query . "<br>" . $db->error;
}

// Close the database connection
$db->close();

?>