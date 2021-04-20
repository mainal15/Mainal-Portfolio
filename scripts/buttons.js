//Greeting
function getName(){
    let name = prompt ("Hi there! What's your name?");
    let output = ("Welcome to my website," + name);
    document.getElementById("getName").innerHTML = output;
}

//Prompts the user for two users and uses conditional statements to output the larger of the two numbers.
function largerNumber(){
    let num1 = parseInt(prompt("Enter a number!: "));
    let num2 = parseInt(prompt("Enter a second number!: "));
    let output = ""
    //If number one is larger than the second number entered,
    if (num1 > num2){ 
        output = "The larger number is " + num1 + "!"; 
    //If the two numbers are equal
    } else if (num1 == num2){
        output = "The numbers are equal!";
    //If number 2 is larger than number 1
    } else if (num2 > num1){ 
        output = "The larger number is " + num2 + "!";
    //If incorrect variables are entered
    } else {
        output = "Uh-Oh! I'm a bit confused."; 
    }
    document.getElementById("largerNumber").innerHTML = output;
   }

//Prompts the user for 3 integers ans uses conditional staements to output the sign of product of three numbers
function signOfProduct () {
        let x = parseInt(prompt("Enter a number!"));
        let y = parseInt(prompt("Enter a second number!"));
        let z = parseInt(prompt("Enter a third number!"));
        //multiply the three numbers entered
        let totalProduct = x * y * z;
        //if the product of the three numbers is negative
        if (totalProduct < 0 ){
          output = "The sign of the product is - , or negative."; 
        }
        //if the product of the three numbers is positive
        if (totalProduct > 0 ){
          output = "The sign of the product is + , or positive."; 
        }
        document.getElementById("signOfProduct").innerHTML = output;
    }

//Sorts three numbers from least to greatest
function threeNumberSort () {
     let x = parseInt(prompt("Enter a number!"));
     let y = parseInt(prompt("Enter a second number!"));
     let z = parseInt(prompt("Enter a third number!"));
     let numSort = [x, y, z];
     numSort.sort(function(x, y){return x-y});{
         output = "Done! The order from least to greatest is: " + numSort + "!"; 
     }
     document.getElementById("threeNumberSort").innerHTML = output;
}

function sumOfThrees () {
    let forSumThrees = 0;
    for (let x = 0; x < 1000; x++) {
    ! (x % 3) && (forSumThrees += x)
    output = "The sum of three is " + forSumThrees + "!"; 
    }
    document.getElementById("sumOfThrees").innerHTML = output;
}

//Uses a while loop to sum the multiples of 3 under 100 and outputs the result
function whileSumThrees () {
        let sum = 0;
        let x = 0;
        while (x < 1000) {
            sum += x;
            x = x + 3;
            output="The while of three is " + sum + "."
        }
        document.getElementById("whileSumThrees").innerHTML = output;
}

//mulriples of 4 and 10.
    function tenFour() {
        //let sum = 0;
        let fourTen = 0;
         for(x = 1; x < 101; x = x +1){
            
             if(x % 4 === 0 && x % 10 === 0){
    
                fourTen += (' TenFour! ');
             }
             else if(x % 4 === 0){
                 fourTen += (' Four! ');
             }
             else if(x % 10 === 0){
                 fourTen += ('Ten!');
             }
             else(fourTen += ' ' + x + ' ');
         }
         alert(fourTen);
}

//finds the century a given year is in
function centuryFromYear () {
     let centuryNum = prompt("Enter a year and I'll tell you what century it was in!");
     let century = 0;
     century = Math.floor(centuryNum / 100 + 1);
     output = "That year is the in the century of " + century + "!"; 
     document.getElementById("centuryFromYear").innerHTML = output;  
}

//Allows the user to enter a message and outputs an encrypted message
function encryption(){
    let plainText = prompt('Enter your message to encrypt');
    let encryptedText = "";
    plainText = plainText.split(" "); 
    //Creates spaces around the list of words
    for(let i = 0; i < plainText.length; i++){
        if(plainText[i].length >= 2){
            let firstLetter = plainText[i][0];
             //Assign the variable  firstLetter' the value of the first letter of 'plainText'
            let secondLetter = plainText[i][1];
            //Assign the variable 'secondLetter' the second letter of 'plainText' 
           encryptedText += 'ahFj' + (plainText[i]).slice(1) + 'Ahf' + secondLetter + firstLetter + "5" + ' '
        }
        else {
            let firstLetter = plainText[i][0];
            encryptedText += (plainText[i][0]) + 'hYu' + firstLetter + ' ';
        }
      }
      output = "Your encrypted message is " + encryptedText;
      document.getElementById("encryption").innerHTML = output;  
    }

    //Allows the user to decrypt their encrypted message
    function decryption(){
        let cypherText = prompt("Enter your encrypted message")
        let decryptedText = ''; 
        //Decrypted text
        let decryptOne = ''; 
        //Moves the last letter to the front again 
        let wholeDecrpyt = '';
         //The rest of the text after the first letter
      cypherText = cypherText.split(" "); 
      //Creates spaces
    for(let i = 0; i < cypherText.length; i = i + 1){
        cypherText[i] = cypherText[i].replace(/Ahf/, ""); 
        cypherText[i] = cypherText[i].replace(/ahFj/g, ""); 
        cypherText[i] = cypherText[i].replace(/5/g, ""); 
        cypherText[i] = cypherText[i].replace(/hYu/g, ""); 
        //Replaces the strings with an empty string 
        if(cypherText[i].length > 2){
            decryptOne = cypherText[i].slice(-1); 
            // Fetches the last character of cypherText and stores it inside 'decryptOne'
            wholeDecrpyt =  (cypherText[i]).slice(0, -2); 
            //Removes the second letter from the end and includes the rest of cypherText 
    
    decryptedText += decryptOne + wholeDecrpyt + ' ';
        }
        else {
            decryptedText += cypherText[i][0] + " "; 
            //Takes cypherText and only includes the first letter. (used for 1 letter words)
            }
    }
    output = "Your decrypted message is " + decryptedText
    document.getElementById("decryption").innerHTML = output;
    }
    
