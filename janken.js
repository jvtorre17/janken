
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
    var PlayerSelection = prompt("Choose Your Weapon.");

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    
    console.log(capitalize(PlayerSelection))
}

getPlayerSelection ()



