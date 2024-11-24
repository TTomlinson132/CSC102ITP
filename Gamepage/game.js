//Declares the first player #
let numb = Math.floor(Math.random()*21);
//Declares the second player #
let sdnumb = numb + Math.floor(Math.random()*21);

////Declares the first bot #
let botnumb = Math.floor(Math.random()*21);
//Declares the second bot #
let sdbotnumb = botnumb + Math.floor(Math.random()*21);

//Function get the var for numb and displays by changing the inner html
function fn(){
    document.getElementById('heading').innerHTML =
    "First Number is:" + numb;
    }
//Function get the var sdnumb and displays by changing the inner html
    function reroll(){
        document.getElementById('heading').innerHTML =
    "Second Number is:" + sdnumb;
    //checks if the sdnumb is greater than 21 if so alert bust
        if(sdnumb>21){
            alert("Bust")
        }
    }
//Function compares bot and player sums to see the greater of the two then alerting win or loss 
//also takes the parameter of name being player
function keep(name){
    if(sdnumb>sdbotnumb){
        alert("You Win " + name)
    }
    else{
        alert("You Lose " + name)
    }
    
}