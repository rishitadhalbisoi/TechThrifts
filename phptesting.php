<?php

echo "Hello World!";

$servername = "localhost";
$userName = "root";
$password = "H0tCh33t0s!!";
$dbName = "test";

$con = mysqli_connect($servername, $userName, $password, $dbName);

echo"Great Work!!!";

if(mysqli_connect_errno()){
    echo "Failed to connect!";
    exit();
}

echo "Connection Success!";

?>
