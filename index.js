
const grids = document.querySelectorAll(".grid");
const message = document.querySelector("#messageID");
const restart = document.querySelector("#restart");
const winnerBlock = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let choices = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

startGame();

function startGame(){
    grids.forEach(grid => grid.addEventListener("click", gridClick));
    restart.addEventListener("click", restartGame);
    messageID.textContent = `Player ${currentPlayer}'s Turn`;
    running = true;
}
function gridClick(){
    const gridIndex = this.getAttribute("gridIndex");

    if(choices[gridIndex] != "" || !running){
        return;
    }

    updateGrid(this, gridIndex);
    checkWin();
}
function updateGrid(grid, index){
    choices[index] = currentPlayer;
    grid.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    messageID.textContent = `Player ${currentPlayer}'s Turn`;
}
function checkWin(){
    let roundWon = false;

    for(let i = 0; i < winnerBlock.length; i++){
        const condition = winnerBlock[i];
        const gridA = choices[condition[0]];
        const gridB = choices[condition[1]];
        const gridC = choices[condition[2]];

        if(gridA == "" || gridB == "" || gridC == ""){
            continue;
        }
        if(gridA == gridB && gridB == gridC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        messageID.textContent = `${currentPlayer} has won!`;
        running = false;
    }
    else if(!choices.includes("")){
        messageID.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    choices = ["", "", "", "", "", "", "", "", ""];
    messageID.textContent = `Player ${currentPlayer}'s Turn`;
    grids.forEach(grid => grid.textContent = "");
    running = true;
}