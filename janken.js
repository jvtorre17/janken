
function getComputerChoice() {
  var ComputerChoice = Math.floor(Math.random() * 3)
  
    if (ComputerChoice == 0) {
        console.log("Rock");
    }

    else if (ComputerChoice == 1){
        console.log("Paper");
    }

    else if(ComputerChoice == 2){
        console.log("Scissors");
    }

}

getComputerChoice()
