
let frame = 1;
let player1Score = 0;
let player2Score = 0;
let yellowPlayer = "player1";
let blackPlayer = "player2";

function updateUI() {
    document.getElementById("frame").innerText = frame;
    document.getElementById("score1").innerText = player1Score;
    document.getElementById("score2").innerText = player2Score;
    document.getElementById("disc1").innerText = yellowPlayer === "player1" ? "Yellow" : "Black";
    document.getElementById("disc2").innerText = yellowPlayer === "player2" ? "Yellow" : "Black";
}

function addPoints(discColor, points) {
    let player = (discColor === "yellow") ? yellowPlayer : blackPlayer;
    if (player === "player1") {
        player1Score += points;
    } else {
        player2Score += points;
    }
    updateUI();
}

function nextFrame() {
    frame++;
    if (frame === 9) {
        // Swap disc colors
        let temp = yellowPlayer;
        yellowPlayer = blackPlayer;
        blackPlayer = temp;
    }
    updateUI();
}

updateUI();
