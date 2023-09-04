

function welcome (){

    console.log("Welcome to Rock paper scissors ! ")
    console.log("Please enter your option: Rock, Paper or Scissors.");      ///Welcome in the game!
}


function getComputerChoice(){
     let choice = Math.floor((Math.random()*3))                     /// Get a random number

    return choice;
}

function setComputerChoise(n){

    let choiseComputer;
    let rock, paper, scissors;

    switch(n){

        case 0 :
            
            choiseComputer = "rock";
            console.log("ROCK!");
            break;

        case 1 :
            choiseComputer = "paper";                    /// Evalue of random number
            console.log("Paper!");
            break;

         case 2 :
            choiseComputer = "scissors";
            console.log("Scissors!");
            break;

        default :
    
        return -1;
            break;
    }
    return choiseComputer;

}

function playerSelection(){

    let selection = prompt("Choose your choice");                       /// Player's choise

    return selection.toLocaleLowerCase;
}



function game(p, c){

    if (typeof p === 'string' && typeof c === 'string'){

    if(p.localeCompare(c , 'en', {sensitivity : 'base'}) === 0){     
        console.log("Tie!");
    }

    else if(p === 'rock' && c ==='paper' ){
        console.log("You Lose! Paper beats Rock")
    }
    else if(p ==='paper' && c==='rock'){                    ///ROCK AND PAPER ROUND
        console.log("You Win! Paper beats Rock")
    }
///-----------------------------------------------------
    else if(p === 'scissors' && c ==='rock' ){
        console.log("You Lose! Rock beats Scissors")
    }
    else if(p ==='rock' && c==='scissors'){                   /// ROCK AND SCISSORS ROUND
        console.log("You Win! Rock beats Scissors")
    }
///-----------------------------------------------------
    else if(p === 'paper' && c ==='scissors' ){
        console.log("You Lose! Scissors beats Paper")
    }               
    else if(p ==='scissors' && c==='paper'){                   /// SCISSORS AND PAPER ROUND
        console.log("You Win! Scissors beats Paper")
    }
   
    }

    else{
        console.log("Invalid Imput.");
    }

}