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

// 1. create buckets for each character type (use array to create a bucket)(global scope)

function generatePassword() {
// code goes here 
// 1. Get use preferences 
// 2. Identify and collect the buckets the user has chosen
// 3. Create a quarenteed collection
// 4. create a password variable, an array
// 5. Randomly draw a character
// 6. put that character on the password variable (how to put an element on the end of an array *google)
// 7. repeat 5 and 6 as many times as specified using for loop (8character password then repeat 8 times)
// 8. loop through the guarenteed element, replace in password array (floor.math.random)
// 9. Join characters in the password array into a string
// 10. return the passsword string
}