//teh function will add sound to our page 
function addSound(){

    //create a new audio HTML element
    var soundElem = document.createElement("audio");
    //nickname/shortcut to the play button
    var btnplay = document.getElementById("btnplay");
       //nickname/shortcut to the pause button
    var btnpause =document.getElementById("btnpause");

    //set up the id="audioSound attribute on our audio element"
    soundElem.setAttribute("id", "audioSound");

    //set up the src="us-lab-background.mp3"
    //src = source = the file name
    soundElem.setAttribute("src", "us-lab-background.mp3")

    //add the audio element that we just create to the html page
    document.body.appendChild(soundElem);

    //un-hide the play and the pause buttons
    btnplay.hidden = false;
    btnpause.hidden = false;
}

//Set up the functionto play sound 
function playSound(){
    // set up a nickname/shortcut to the audio elment that we created in the 
    //addSound( function)
    var audio = document.getElementById("audioSound")
    //start playing the audio
    audio.play();
    //log the playing tsarted to the console because of sound issues in this computer
    console.log("Sound player");
}

//set up the function to pause the sound
function pauseSound(){
    // set up a nickname/shortcut to the audio elment that we created in the 
    //addSound( function)
    var audio = document.getElementById('audioSound')
    //paused the sound 
    audio.pause();
    //logs if teh sound is paused into the console
    console.log("Sound paused")
}