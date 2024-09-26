<?php
include('connection.php');
session_start();


if (!empty($_POST['usernameField']) && !empty($_POST['passwordField'])) {
    $userUsername = $_POST['usernameField'];
    $userPassword = md5($_POST['passwordField']);

    $_SESSION["userName"] = $userUsername;

    $sql = "SELECT * FROM users WHERE nick='$userUsername' AND password='$userPassword'";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);

        // print_r($row);
        header("Location: index.php");
        $_SESSION["isLogedIn"] = 1;
    } else {
        $_SESSION["isLogedIn"] = 0;
        header("Location: index.php");
        $_SESSION["info"] = "Nickname or password is wrong :/";
    }
} else {
    header("Location: index.php");
    $_SESSION["isLogedIn"] = 0;
    $_SESSION["info"] = "Nickname or password is wrong :/";
}
