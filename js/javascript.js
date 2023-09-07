

function getComputerChoice(){
    if(gameFinished==false){
     let choice = Math.floor((Math.random()*3))                     /// Get a random number
    return choice;
    }
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
                
        console.log("You Win! Scissors beats Paper")
        return 1;
            }
   
        }

        else{
        console.log("Invalid Imput.");
            }
    }


 }


 ///-----------------------------------------------------DOM-------------------------------------------

///const turnChildImgUser=document.getElementById("turnChildImgUser"); ///Img of the user in the firx box
///const turnChildImgComputer =document.getElementById("turnChildImgComputer"); ///Img of the computer en the second box

function changeToRockUser(){
    if(gameFinished==false){
    const img = document.getElementById("turnChildImgUser") ;   
    img.src="/img/rock1.png";       ///Change the first box to rock *USER*
    return "rock";
    }
}

function changetoPaperUser(){
    if(gameFinished==false){
    const img = document.getElementById("turnChildImgUser");
    img.src="/img/paper.png";       ///Change the first box to paper *USER*
    return "paper";
    }
}

function changetoScissorsUser(){
    if(gameFinished==false){
    const img = document.getElementById("turnChildImgUser");
    img.src="/img/scissors.png";       ///Change the first box to scissors *USER*
    return "scissors";
    }
}

function changeToRockComputer(){
    const img = document.getElementById("turnChildImgComputer") ;   
    img.src="/img/rock1.png";       ///Change the second box to rock *COMPUTER*
    return "rock";
}

function changeToPaperComputer(){
    const img = document.getElementById("turnChildImgComputer") ;
    img.src="/img/paper.png";   ///Change the second box to paper *COMPUTER*
    return "paper";
}

function changeToScissorsComputer(){
    const img = document.getElementById("turnChildImgComputer") ;
    img.src="/img/scissors.png"; ///Change the second box to scissors *COMPUTER*
    return "scissors";
}


function evalueComputer(x){

    roundCounter++; /// rounds.

    switch(x){
        case 0:
            changeToRockComputer();
            return "rock";
            break;
        case 1:
            changeToPaperComputer();    
             return "paper";          ///Transform the random numbner  | Get a computer Choise
             break;
         case 2:
            changeToScissorsComputer();
            return "scissors"; 
            break;
        default:
            return -1;
            break;
    }
}


let scoreChildrenUser = document.getElementById("scoreChildrenUser");
//let scoreChildrenComputer = document.getElementById("scoreChildrenComputer");
//let countererComputer = 0;



let countererComputer = 0;
let countererUser = 0;
let gameFinished = false;
function playGameRock(){
    if(gameFinished == false){
    const scoreChildrenComputer = document.getElementById("scoreChildrenComputer");

    let choiseRock = subTextScore('rock',evalueComputer(getComputerChoice()));

    

    
    if(choiseRock === 1){

        countererUser++;
        scoreChildrenUser.innerHTML = countererUser;
    }
    else if(choiseRock === 0){
        
        countererComputer++;
        scoreChildrenComputer.innerHTML = countererComputer;
        
    }
}
}



function playGamePaper(){
    if(gameFinished == false){

    const scoreChildrenComputer = document.getElementById("scoreChildrenComputer");

    let choiseRock = subTextScore('paper',evalueComputer(getComputerChoice()));
    
    if(choiseRock === 1){

        countererUser++;
        scoreChildrenUser.innerHTML = countererUser;
    }
    else if(choiseRock === 0){
        
        countererComputer++;
        scoreChildrenComputer.innerHTML = countererComputer;
        
    }
}
}



function playGameScissors(){
    if(gameFinished == false){

    const scoreChildrenComputer = document.getElementById("scoreChildrenComputer");

    let choiseRock = subTextScore('scissors',evalueComputer(getComputerChoice()));
    
    if(choiseRock === 1){

        countererUser++;
        scoreChildrenUser.innerHTML = countererUser;
    }
    else if(choiseRock === 0){
        
        countererComputer++;
        scoreChildrenComputer.innerHTML = countererComputer;
        
    }
}
}


function counterGame(result){

    if(result === 1){

        countererUser++;
        scoreChildrenUser.innerHTML = countererUser;
    }
    else if(result === 0){
        
        countererComputer++;
        scoreChildrenComputer.innerHTML = countererComputer;
    }
    incrementRoundCounter();
}

let subText = document.getElementById("subText");

function subTextScore(p,c){
    
    if(gameFinished==false){
        
   
    {


        if (typeof p === 'string' && typeof c === 'string')
        {

        if(p.localeCompare(c , 'en', {sensitivity : 'base'}) === 0)
        {     
            console.log("Tie!");
            subText.innerHTML="Tie!"

        }

        else if(p === 'rock' && c ==='paper' )
        {
        subText.innerHTML="You Lose! Paper beats Rock!"
        return 0;
        }
        else if(p ==='paper' && c==='rock')
        {                                                       ///ROCK AND PAPER ROUND
        subText.innerHTML="You Win! Paper beats Rock!"
        return 1;

        }
///-----------------------------------------------------
        else if(p === 'scissors' && c ==='rock' ){
        subText.innerHTML="You Lose! Rock beats Scissors!"           /// ROCK AND SCISSORS ROUND
        return  0;          
        }

        else if(p ==='rock' && c==='scissors') {                   
        subText.innerHTML="You Win! Rock beats Scissors!"
            return 1;
        }
///-----------------------------------------------------
        else if(p === 'paper' && c ==='scissors' ){
        subText.innerHTML="You Lose! Scissors beats Paper!"
        return 0;
        }    

        else if(p ==='scissors' && c==='paper') {          /// SCISSORS AND PAPER ROUND{  
        subText.innerHTML="You Win! Scissors beats Paper!"
        return 1;
         }
   
        

        else{
        console.log("Invalid Imput.");
        }
    }
        }


    }
 }


 const initialValueBoxUser = document.getElementById("scoreChildrenUser");
 const initialValueBoxComputer = document.getElementById("scoreChildrenComputer");
 let roundCounter = 0;

 const retryChild = document.getElementById("retryChild");
 
 function showRetryButton() {
    retryChild.style.display = "block";

  }

 retryChild.addEventListener('click',  function () {
    countererUser = 0;
    countererComputer = 0;
    document.getElementById("scoreChildrenUser").textContent = 0;
    document.getElementById("scoreChildrenComputer").textContent = 0;
    roundCounter = 0;
    retryChild.style.display = "none";
    gameFinished=false;

});
function incrementRoundCounter() {
    roundCounter++;
    if (roundCounter >= 13) {
      showRetryButton();
      gameFinished=true;

      const userVs = document.getElementById("scoreChildrenUser");
      const computerVs = document.getElementById("scoreChildrenComputer");
      const innerFinalRound = document.getElementById("subText");

      if(countererUser > countererComputer){
        innerFinalRound.innerHTML=" Well good, I have won";
    }
    else if(countererComputer > countererUser){
        innerFinalRound.innerHTML="Do I really win you a PC? lol"
    }
    else{
        innerFinalRound.innerHTML="It's a tie, try again"
    }
  }
}
 















