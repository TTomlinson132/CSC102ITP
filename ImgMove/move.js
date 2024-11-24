
//track the interval id
var intervalId = 0;


//This function moves the image 
function moveImage(){
    // create nickname/shortcut variable that points to HTMl imgae
    var image = document.getElementById("memeImage")

    //this keeps track of old location
    var oldX = 0;
    var oldY = 0;
    //keep track of the intervalid will allow us to stop the image 
    intervalId = setInterval(function(){
        var newX = 5; //moving the image by 5 pixels - this could be a random 
        var newY = 5; //moving the image by 5 pixels - this could be a random

        //oldx += newX is the same as oldx = oldx+newX
        oldX += newX;
        oldY += newY;

        console.log("oldX = " + oldX)
        console.log("oldY = " + oldY)

        image.style.left = oldX + "px"
        image.style.top = oldY + "px"
    }, 1000); //1000 is 1000 milsecond = 1 sec
}

//the function stops the img from moving
function stopmoveImage(){
    // call the built in javascript function to clear out the interval
    clearInterval(intervalId);
}