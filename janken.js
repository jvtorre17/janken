
function getComputerSelection() {
  var CompRandom = Math.floor(Math.random() * 3)
  
    if (CompRandom == 0) {
        return "Rock";
    }

    else if (CompRandom == 1){
        return "Paper";
    }

    else if(CompRandom == 2){
        return "Scissors";
    }

}

const ComputerSelection = getComputerSelection()


function getPlayerSelection() {
    return prompt("Choose Your Weapon.");
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} /*capitalize answer from prompt*/

const PlayerSelection = capitalize(getPlayerSelection())


function playRound(PlayerSelection, ComputerSelection) {
    if (PlayerSelection == ComputerSelection) {
        return "It's a tie.";
    }

    else if (PlayerSelection == "Rock" && ComputerSelection == "Scissors") {
        return "You chose Rock. You won!";
    }

    else if (PlayerSelection == "Rock" && ComputerSelection == "Paper") {
        return "You chose Rock. You lose!";
    }

    else if (PlayerSelection == "Paper" && ComputerSelection == "Scissors") {
        return "You chose Paper. You lose!";
    }

    else if (PlayerSelection == "Paper" && ComputerSelection == "Rock") {
        return "You chose Paper. You won!";
    }

    else if (PlayerSelection == "Scissors" && ComputerSelection == "Paper") {
        return "You chose Scissors. You won!";
    }

    else if (PlayerSelection == "Scissors" && ComputerSelection == "Rock") {
        return "You chose Scissors. You lose!";
    }
}


/*console.log(playRound(PlayerSelection, ComputerSelection));*/

function game() {
    getComputerSelection();
    const ComputerSelection = capitalize(getComputerSelection());
    getPlayerSelection();
    const PlayerSelection = capitalize(getPlayerSelection());
    playRound(PlayerSelection, ComputerSelection);
    console.log(playRound(PlayerSelection, ComputerSelection));
}

game()
game()
game()
game()
game()