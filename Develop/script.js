// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// buckets for each character type 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start Password variable values: 
// Special characters 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Choices declared outside the if statement so they can be concatenated upon condition

var choices;
 

function generatePassword() {
    
    enter = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        // enter = parseInt(prompt("You must choose between 8 and 128"));

        alert("You must choose between 8 and 128")

        return"Try again";

        
    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will your password contain numbers?");
        confirmCharacter = confirm("Will your password contain special characters?");
        confirmUppercase = confirm("Will your password contain Uppercase letters?");
        confirmLowercase = confirm("Will your password contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, lowerCase, upperCase);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, upperCase);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowerCase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowercase, upperCase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowerCase, upperCase);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowerCase);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upperCase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowerCase.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lowerCase.concat(upperCase);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upperCase);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowerCase;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = upperCase;
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    return password.join("");

}

