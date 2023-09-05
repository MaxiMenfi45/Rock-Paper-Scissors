

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

    return selection.toLocaleLowerCase();
}



function game(p, c)
{
 
        
   
    {


        if (typeof p === 'string' && typeof c === 'string')
        {

        if(p.localeCompare(c , 'en', {sensitivity : 'base'}) === 0)
        {     
            console.log("Tie!");

        }

        else if(p === 'rock' && c ==='paper' )
        {

        console.log("You Lose! Paper beats Rock")
        return 0;
        }
        else if(p ==='paper' && c==='rock')
        {                                                       ///ROCK AND PAPER ROUND
        console.log("You Win! Paper beats Rock")
        return 1;

        }
///-----------------------------------------------------
        else if(p === 'scissors' && c ==='rock' )
        {

        console.log("You Lose! Rock beats Scissors")            /// ROCK AND SCISSORS ROUND
        return  0;          
        }
        else if(p ==='rock' && c==='scissors')
        {                   
        console.log("You Win! Rock beats Scissors")
            return 1;
        }
///-----------------------------------------------------
        else if(p === 'paper' && c ==='scissors' )
        {

        console.log("You Lose! Scissors beats Paper")
        return 0;
        }               
        else if(p ==='scissors' && c==='paper')              /// SCISSORS AND PAPER ROUND
            { 
                
        console.log("  You Win! Scissors beats Paper")
        return 1;
            }
   
        }

        else{
        console.log("Invalid Imput.");
            }
    }


 }

 function getRock(){
     console.log("You select Rock");
     return "rock"
    }
 function getPaper(){
     console.log("You select Paper");
    return "paper"
 }
 function getScissors(){
     console.log("You select Scissors");
    return "scissors"
 }



 ///-----------------------------------------------------DOM-------------------------------------------

///const turnChildImgUser=document.getElementById("turnChildImgUser"); ///Img of the user in the firx box
///const turnChildImgComputer =document.getElementById("turnChildImgComputer"); ///Img of the computer en the second box

function changeToRockUser(){
    const img = document.getElementById("turnChildImgUser") ;   
    img.src="/img/rock1.png";       ///Change the first box to rock *USER*
    return "rock";
}

function changetoPaperUser(){
    const img = document.getElementById("turnChildImgUser");
    img.src="/img/paper.png";       ///Change the first box to paper *USER*
    return "paper";
}

function changetoScissorsUser(){
    const img = document.getElementById("turnChildImgUser");
    img.src="/img/scissors.png";       ///Change the first box to scissors *USER*
    return "scissors";
}

function changeToRockComputer(){
    const img = document.getElementById("turnChildImgComputer") ;   
    img.src="/img/rock1.png";       ///Change the first box to rock *COMPUTER*
    return "rock";
}

function changeToPaperComputer(){
    const img = document.getElementById("turnChildImgComputer") ;
    img.src="/img/paper.png";   ///Change the first box to paper *COMPUTER*
    return "paper";
}

function changeToScissorsComputer(){
    const img = document.getElementById("turnChildImgComputer") ;
    img.src="/img/scissors.png"; ///Change the first box to scissors *COMPUTER*
    return "scissors";
}


function evalueComputer(x){

    switch(x){
        case 0:
            changeToRockComputer();
            break;
        case 1:
            changeToPaperComputer();
             break;
         case 2:
            changeToScissorsComputer();
            break;
        default:
            return -1;
            break;
    }
}








