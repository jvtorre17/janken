
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

const PlayerSelection = getPlayerSelection()

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log("You chose " + capitalize(PlayerSelection))



