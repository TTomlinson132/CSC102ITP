//create a function to test to see if the word is a palindrome 
function checkPalindrome(wordToTest){
    //remove all the spaces in the string that was passed
    var cleanedWord = wordToTest.replace(/\s/g,"").toLowerCase();
    //take our cleaned word with no spaces and reverse it 
    var reversedWord = cleanedWord.split('').reverse().join('');

    //If the cleaned and reseverse word are the same, the function returns as true 
    //if they are different, the function returns false.
    return cleanedWord == reversedWord;

}

console.log("radar = " + checkPalindrome("radar"))
console.log("tag = " + checkPalindrome("tag"))
console.log("A man a plan a camal Panama = " + checkPalindrome("A man a plan a canal Panama "))

//bContinue will track if the user wants to keep entering the words
var bContinue = true;

//loop to keep the code running for as long as the user wants 
do{
    //get a word from the user
    var userInput = prompt("Enter a word to test if it is a palindrome:")
    //test the varibable that the user entered
    var isPalindrome = checkPalindrome(userInput);

    //show the use a message based on the true/false value from the function
    //if isPalindrome is true, the if statment will run
    
    if (isPalindrome){//same as if (ifPalindrome == true)
        alert(userInput + "is a Palindrome")
    }
    //if not a palindrome 
    else{
        alert(userInput + "is NOT a palindrome!")
    }
    //ask the user if they want to continue testing palindromes 
    var answer = prompt("Do you want to continue (y/n)");

    //test to see if they entered in 
    if (answer.toLowerCase()=="n"){
        bContinue = false;// change bContinue to false to exit out of the loop
    }
}while(bContinue);// while bContinue is true keep running the loop