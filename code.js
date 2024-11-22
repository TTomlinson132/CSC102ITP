//Declares the first player #
let numb = Math.floor(Math.random()*21);
//Declares the second player #
let sdnumb = numb + Math.floor(Math.random()*21);

////Declares the first bot #
let botnumb = Math.floor(Math.random()*21);
//Declares the second bot #
let sdbotnumb = botnumb + Math.floor(Math.random()*21);

//creates a prompt that gets the player name
var playerName = prompt("What is the player name: ")


//makes sure the answer is less than 20 characters
if (playerName.length>20){
    var playerName = prompt("What is a valid player name")
}
//checks to make sure that the answer is not empty space
if (playerName.trim() = ""){
    var playerName = prompt("What is a valid player name")
}



//Function get the var for numb and displays by changing the inner html
function fn(){
    document.getElementById('heading').innerHTML =
    playerName + "'s " + "First Number is:" + numb;
    //unhides the button
    btnreroll.hidden = false;
    }



//Function get the var sdnumb and displays by changing the inner html
    function reroll(){
        document.getElementById('heading').innerHTML =
    playerName + "'s " + "Second Number is:" + sdnumb;
    //checks if the sdnumb is greater than 21 if so alert bust
        if(sdnumb>21){
            alert("Bust")
        }
        //unhides the button
        btnkeep.hidden = false;
    }




//Function compares bot and player sums to see the greater of the two then alerting win or loss 
//also takes the parameter of name being player
function keep(playerName){
    if(sdnumb>sdbotnumb){
        alert("You Win " + playerName)
    }
    else{
        alert("You Lose " + playerName)
    }
    
}


function addsound(){

}