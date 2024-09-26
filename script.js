
let counter = 0;
const cells = document.querySelectorAll('td');
const resetButton = document.getElementById('resetButton');
const newGameButton = document.getElementById('newGameButton');
let infoBlock = document.getElementById('info');
let gameEnded = false;
let winner = null;

let userLogOn = 0;

let playerOnePointsBlock = document.getElementById('playerOnePoints');
let playerTwoPointsBlock = document.getElementById('playerTwoPoints');
let playerOnePoints = 0;
let playerTwoPoints = 0;


function resetButtonFunc() {
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove('colorChange', 'colorChange2');

    });

    counter = 0;
    gameEnded = false;
    infoBlock.innerHTML = "Teraz porusza się gracz <img src='kolko.png'>";
}
resetButton.addEventListener('click', resetButtonFunc);



function newGame() {

    counter = 0;
    playerOnePoints = 0;
    playerTwoPoints = 0;
    playerOnePointsBlock.innerHTML = "0";
    playerTwoPointsBlock.innerHTML = "0";
    gameEnded = true;
    isEnd();
    resetButtonFunc();
    resetButton.style.display = ("block");
    newGameButton.style.display = ("none")
}



setTimeout(checkDraw, 50);
function checkDraw() {
    cells.forEach(cell => {
        if (Array.from(cells).every(cell =>
            cell.classList.contains('colorChange') || cell.classList.contains('colorChange2') && gameEnded == false
        )) {
            infoBlock.innerHTML = "REMIS";
        }
    });
}

function isEnd() {
    if (playerOnePoints == 3) {
        infoBlock.innerHTML = "Gracz <img src='kolko.png'> wygral " + playerOnePoints + ":" + playerTwoPoints;
        winner = 1;
        if (userLogOn == 1) {
            sendData();
        }
        counter = 0;
        gameEnded = true;
        playerOnePoints = 0;
        playerTwoPoints = 0;

        resetButton.style.display = ("none");
        newGameButton.style.display = ("block")

    }
    else if (playerTwoPoints == 3) {
        infoBlock.innerHTML = "Gracz <img src='krzyzyk.png'> wygral " + playerOnePoints + ":" + playerTwoPoints;
        winner = 2;
        if (userLogOn == 1) {
            sendData();
        }
        counter = 0;
        gameEnded = true;
        playerOnePoints = 0;
        playerTwoPoints = 0;

        resetButton.style.display = ("none");
        newGameButton.style.display = ("block")
    }
}


cells.forEach(cell => {
    cell.addEventListener('click', function () {

        if (gameEnded) {
            counter = 0;

            return;
        }

        if (this.classList.contains('colorChange') || this.classList.contains('colorChange2')) {
            return;
        }
        if (counter % 2 == 0) {
            if (this.classList.contains('colorChange2')) {
                return;
            }
            else {
                this.classList.add('colorChange');
                this.innerHTML = "<img src='kolko.png'>";
                counter++;
                isEnd()
                infoBlock.innerHTML = " Teraz porusza się gracz <img src='krzyzyk.png'>";



            }
        }
        else if (counter % 2 == 1) {
            if (this.classList.contains('colorChange')) {
                return;
            }
            else {
                this.classList.add('colorChange2');
                this.innerHTML = "<img src='krzyzyk.png'>";
                counter++;
                isEnd();
                infoBlock.innerHTML = " Teraz porusza się gracz <img src='kolko.png'>";

            }

        }

        setTimeout(checkWin, 50);

    });
});




function checkWin() {


    if (
        (cells[0].classList.contains('colorChange') && cells[1].classList.contains('colorChange') && cells[2].classList.contains('colorChange')) ||
        (cells[3].classList.contains('colorChange') && cells[4].classList.contains('colorChange') && cells[5].classList.contains('colorChange')) ||
        (cells[6].classList.contains('colorChange') && cells[7].classList.contains('colorChange') && cells[8].classList.contains('colorChange'))
    ) {
        infoBlock.innerHTML = "Wygral gracz <img src='kolko.png'>";
        playerOnePoints++;
        playerOnePointsBlock.innerHTML = "" + playerOnePoints;
        counter = 0;
        gameEnded = true;
        isEnd();
    }
    else if (
        cells[0].classList.contains('colorChange') && cells[3].classList.contains('colorChange') && cells[6].classList.contains('colorChange') || cells[1].classList.contains('colorChange') && cells[4].classList.contains('colorChange') && cells[7].classList.contains('colorChange') || cells[2].classList.contains('colorChange') && cells[5].classList.contains('colorChange') && cells[8].classList.contains('colorChange')
    ) {
        infoBlock.innerHTML = "Wygral gracz <img src='kolko.png'>";
        playerOnePoints++;
        playerOnePointsBlock.innerHTML = "" + playerOnePoints;
        counter = 0;
        gameEnded = true;
        isEnd();
    }
    else if (
        cells[0].classList.contains('colorChange') && cells[4].classList.contains('colorChange') && cells[8].classList.contains('colorChange')
    ) {
        infoBlock.innerHTML = "Wygral gracz <img src='kolko.png'>";
        playerOnePoints++;
        playerOnePointsBlock.innerHTML = "" + playerOnePoints;
        counter = 0;
        gameEnded = true;
        isEnd();
    }
    else if (
        cells[2].classList.contains('colorChange') && cells[4].classList.contains('colorChange') && cells[6].classList.contains('colorChange')
    ) {
        infoBlock.innerHTML = "Wygral gracz <img src='kolko.png'>";
        playerOnePoints++;
        playerOnePointsBlock.innerHTML = "" + playerOnePoints;
        counter = 0;
        gameEnded = true;
        isEnd();
    }









    if (
        (cells[0].classList.contains('colorChange2') && cells[1].classList.contains('colorChange2') && cells[2].classList.contains('colorChange2')) ||
        (cells[3].classList.contains('colorChange2') && cells[4].classList.contains('colorChange2') && cells[5].classList.contains('colorChange2')) ||
        (cells[6].classList.contains('colorChange2') && cells[7].classList.contains('colorChange2') && cells[8].classList.contains('colorChange2'))
    ) {
        infoBlock.innerHTML = "Wygral gracz <img src='krzyzyk.png'>";
        playerTwoPoints++;
        playerTwoPointsBlock.innerHTML = "" + playerTwoPoints;
        counter = 0;
        gameEnded = true;
        isEnd();
    }

    else if (
        cells[0].classList.contains('colorChange2') && cells[3].classList.contains('colorChange2') && cells[6].classList.contains('colorChange2') || cells[1].classList.contains('colorChange2') && cells[4].classList.contains('colorChange2') && cells[7].classList.contains('colorChange2') || cells[2].classList.contains('colorChange2') && cells[5].classList.contains('colorChange2') && cells[8].classList.contains('colorChange2')
    ) {
        infoBlock.innerHTML = "Wygral gracz <img src='krzyzyk.png'>";
        playerTwoPoints++;
        playerTwoPointsBlock.innerHTML = "" + playerTwoPoints;
        counter = 0;
        gameEnded = true;
        isEnd();
    }
    else if (
        cells[0].classList.contains('colorChange2') && cells[4].classList.contains('colorChange2') && cells[8].classList.contains('colorChange2') || cells[2].classList.contains('colorChange2') && cells[4].classList.contains('colorChange2') && cells[6].classList.contains('colorChange2')
    ) {
        infoBlock.innerHTML = "Wygral gracz <img src='krzyzyk.png'>";
        playerTwoPoints++;
        playerTwoPointsBlock.innerHTML = "" + playerTwoPoints;
        counter = 0;
        gameEnded = true;
        isEnd();
    }


    checkDraw();
}


function checkLoginStatus() {
    fetch('checking_login.php') // Ścieżka do pliku PHP
        .then(response => response.json()) // Oczekujemy danych w formacie JSON
        .then(data => {
            // Odczytujemy zmienną isLogedIn
            if (data.isLogedIn) {
                console.log("Użytkownik jest zalogowany.");
                userLogOn = 1;

            } else {
                console.log("Użytkownik nie jest zalogowany.");
            }
        })
        .catch(error => {
            console.error('Błąd:', error);
        });
}







function sendData() {
    let data = {
        whoWinner: winner,
        onePlayerPoints: playerOnePoints,
        twoPlayerPoints: playerTwoPoints
    };

    fetch('process_data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
        .then(response => response.json())
        .then(result => {
            console.log("dane wyslane", result);
        })
        .catch(error => {
            console.error("blad danych", error);
        });

}



// Wywołanie funkcji do sprawdzenia stanu logowania
checkLoginStatus();