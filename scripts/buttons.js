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


function project2 () {
    alert("Project 2 coming soon!");
}

function project3 () {
    alert("Project 3 coming soon!");
}

function project4 () {
    alert("Project 4 coming soon!");
}

function project5 () {
    alert("Project 5 coming soon!");
}

function project6 () {
    alert("Project 6 coming soon!");
}

function project7 () {
    alert("Project 7 coming soon!");
}

function project8 () {
    alert("Project 8 coming soon!");
}

function project9 () {
    alert("Project 9 coming soon!");
}
