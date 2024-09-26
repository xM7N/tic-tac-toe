<!DOCTYPE html>
<html lang="pl">

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <?php
    session_start();

    if (isset($_SESSION["info"])) {
        echo ($_SESSION["info"]);
        session_destroy();
    }

    if (isset($_SESSION["isLogedIn"]) && $_SESSION["isLogedIn"] == 1) {
        echo "Poprawnie zalogowano <strong> {$_SESSION['userName']} </strong>";
        // Poprawne wypisanie formularza
        echo '<form action="logout.php" method="post">
                    <input type="submit" value="logout">
                </form>';
    } else {
        // Ten warunek będzie się odnosił do przypadków, gdy użytkownik NIE jest zalogowany
        echo "Nie jesteś zalogowany";
    }



    $mysqli = new mysqli("localhost", "root", "", "tic-tac-toe");

    if ($mysqli->connect_errno) {
        echo ("Failed to connect");
        exit();
    }
    // else {
    //     var_dump("Polaczono z baza");
    //     exit();
    // }


    ?>
    <form action="login.php" method="post">
        <input type="text" name="usernameField" id="usernameField" placeholder="Username">
        <input type="password" name="passwordField" id="passwordField" placeholder="Password">
        <br>
        <input type="submit" value="submit">

    </form>


    <div id="players">
        <img src="kolko.png" alt="gracz1">
        <img src="krzyzyk.png" alt="gracz2">
    </div>
    <div id="info">
        Teraz porusza się gracz <img src="kolko.png">
    </div>
    <br>

    <div id="container">
        <div id="playerOnePoints">
            0
        </div>

        <table>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>

        <div id="playerTwoPoints">
            0
        </div>
    </div>



    <br>
    <br>
    <button id="resetButton" onclick="resetButtonFunc()">RESET</button>
    <button id="newGameButton" onclick="newGame()"">NOWA GRA</button>




        <script src=" script.js"></script>
</body>

</html>