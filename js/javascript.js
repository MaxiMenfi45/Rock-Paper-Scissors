

function welcome (){

    console.log("Welcome to Rock paper scissors ! ")
    console.log("Please enter your option: Rock, Paper or Scissors.");      ///Welcome in the game!
}


function getComputerChoice(){
    let choise = parseInt(console.log(Math.random()*3))                     /// Get a random number

}

function setComputerChoise(n){


    switch(n){

        case 0 :
            
            choiseComputer = rock;
            return choiseComputer;
            console.log("ROCK!");
            break;

        case 1 :
            choiseComputer = paper;
            return choiseComputer;                                         /// Evalue of random number
            break;

         case 2 :
            choiseComputer = scissors;
            return choiseComputer;
            break;

        default :
    
        return -1;
            break;
    }

}

