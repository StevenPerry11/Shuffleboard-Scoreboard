
let frame = 1;
let scores = {
    player1: 0,
    player2: 0
};
let yellowPlayer = "player1";
let blackPlayer = "player2";

function updateUI() {
    document.getElementById("frame").innerText = frame;
    document.getElementById("score1").innerText = scores.player1;
    document.getElementById("score2").innerText = scores.player2;
    document.getElementById("disc1").innerText = yellowPlayer === "player1" ? "Yellow" : "Black";
    document.getElementById("disc2").innerText = yellowPlayer === "player2" ? "Yellow" : "Black";
}

function addPoints(discColor, points) {
    let targetPlayer = (discColor === "yellow") ? yellowPlayer : blackPlayer;
    scores[targetPlayer] += points;
    updateUI();
}

function nextFrame() {
    frame++;
    if (frame === 9) {
        // Swap disc assignments
        let temp = yellowPlayer;
        yellowPlayer = blackPlayer;
        blackPlayer = temp;
    }
    updateUI();
}

updateUI();
