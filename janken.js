
function getComputerSelection() {
  var ComputerSelection = Math.floor(Math.random() * 3)
  
    if (ComputerSelection == 0) {
        console.log("Rock");
    }

    else if (ComputerSelection == 1){
        console.log("Paper");
    }

    else if(ComputerSelection == 2){
        console.log("Scissors");
    }

}

/*getComputerSelection()*/

function getPlayerSelection() {
    return prompt("Choose Your Weapon.");
}

const PlayerSelection = getPlayerSelection()

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log("You chose " + capitalize(PlayerSelection))



