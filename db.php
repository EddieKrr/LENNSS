<?php
$host = 'localhost'; // Database host
$user = 'root';      // Database username
$password = '';      // Database password
$dbname = 'lennss'; // Database name

// Create a connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
