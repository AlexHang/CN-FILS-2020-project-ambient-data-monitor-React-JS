<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ambientdatamonitoring";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO `userbrowserdata` (`DataId`, `Browser`, `DateTime`, `IP`) VALUES (NULL, '".$_GET["Browser"]."', CURRENT_TIMESTAMP, '".$_GET["IP"]."');";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>