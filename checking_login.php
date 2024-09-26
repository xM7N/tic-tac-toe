<?php
include('connection.php');

session_start();

$logStatus = isset($_SESSION["isLogedIn"]) && $_SESSION["isLogedIn"] == 1;

header("Content-Type: application/json");

echo json_encode(['isLogedIn' => $logStatus]);
