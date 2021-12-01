// Assignment code here
var passLength = 8;
var criteria = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// create function that created arrays
function arrayLowToHigh(low, high) {
  var array = [];
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array;
};

// create arrays for password criteria
var  UPPERCASE_CHAR= arrayLowToHigh(65, 90); 
var LOWERCASE_CHAR = arrayLowToHigh(97, 122);
var NUMBER_CHAR = arrayLowToHigh(48, 57);
var SPECIAL_CHAR = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64)
).concat(
  arrayLowToHigh(91, 96)
).concat(
  arrayLowToHigh(123, 126));
console.log(LOWERCASE_CHAR)
console.log(UPPERCASE_CHAR)
console.log(SPECIAL_CHAR)
var stringLowerCase = String.fromCharCode.apply(null,LOWERCASE_CHAR)
var stringNumbers = String.fromCharCode.apply(null,NUMBER_CHAR)
var stringUpper = String.fromCharCode.apply(null,UPPERCASE_CHAR)
var stringSpecial = String.fromCharCode.apply(null,SPECIAL_CHAR)
console.log(stringLowerCase)
console.log(stringUpper)
console.log(stringSpecial)


// asklength function
var askLength = function () {
  passLength = window.prompt("How long do you want your password to be?");

  if (!passLength) {
    var redoConfirm = window.confirm("You must choose a length, would like to try again?");
    if (redoConfirm) {
      askLength();
    }
    else {
      passLength = 8;
      return passLength;
    }
  }
  return passLength;
};


// generate password
var generatePassword = function () {
  var characters = "";
  var password = [];
  var passLength = askLength();

  var specialCharacters = window.confirm("Do you want special characters? Click cancel if no.");


  var numbers = window.confirm("Do you want numbers? Click cancel if no.");

  var upperCase = window.confirm("Do you want capital letters? Click cancel if no.");

  var lowerCase = window.confirm("Do you want lowercase letters? Click cancel if no.");
// checking for user input
  if (!(specialCharacters) && !(upperCase) && !(lowerCase) && !(numbers)) {
    return null;
  }
  if (specialCharacters) {
    characters = characters + stringSpecial 
  }

  if (upperCase) {
    characters = characters + stringUpper 
  }
  if (lowerCase) {
    characters = characters + stringLowerCase 
  }
  if(numbers){
    characters = characters + stringNumbers
  }
  for (let i = 0; i < passLength; i++) {
    var passwordCharacterCode = characters.charAt(Math.floor(Math.random() * characters.length));
    password.push(passwordCharacterCode);

  }
  console.log(characters)
  return password.join("")

};

// Write password to the #password input
var writePassword = function (password) {
  var passwordText = document.querySelector("#password");
  password = generatePassword();
  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


