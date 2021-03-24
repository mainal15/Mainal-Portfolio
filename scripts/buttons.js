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

//finds the missing angle of two angles that make up a triangle.
function thirdAngle () {
    let num1 = parseInt (prompt("Enter a angle value!"));
    let num2 = parseInt (prompt('Enter a second angle value!'));
    let sumOfAngle = 0;
        if ((num1 + num2) < 180){
        missingAngle = 180 - (num1 + num2);
        output="The missing angle is " + missingAngle + "!";
    }
    else if (num1 + num2 > 180){
        output="Uh-Oh! Seems like those angles dont make up a triangle.";
    }
document.getElementById("thirdAngle").innerHTML = output;
    }

function project9 () {
    alert("Project 9 coming soon!");
}
