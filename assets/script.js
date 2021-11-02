// Assignment code here
var specialCharacters = (Boolean);
var upperCase = (Boolean);
var lowerCase = (Boolean);
var passLength = 8;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// asklegnth function
var askLength = function() {
 var length = window.prompt("How long do you want your password?");
 length = passLength;
  if (passLength == null) {
    redoConfirm = console.confirm("You must choose a length, would like to try again?");
    if(redoConfirm) {
      askLength();
    }
    else {
      passLength = 8;
      return passLength;
    }
  }
  return passLength;
};
  // letter generator 
  var letterGenerator = function() {
    return (Math.floor(Math.random() * 77) + 34);
  };

  // generate password
var generatePassword = function(passLength) {
  passLength = askLength();
  var password = [""];

  specialCharacters = window.confirm("Do you want special characters? Click cancel if no.");
  
  upperCase = window.confirm("Do you want capital letters? Click cancel if no.");

  lowerCase = window.confirm("Do you want lowercase letters? Click cancel if no.");
  
  // special characters & capitals
  if (specialCharacters && upperCase && lowerCase) {
    // all three capital letters, lowercase and special characters
    console.log("all three");

    for (var i=0; i < passLength.length; i++){
      password =+ letterGenerator();
    }
  }
    else if (specialCharacters && upperCase) {
        // special and uppercase
        upperCase
    }
    else if (lowerCase && upperCase) {
      // special and uppercase
    }
    else if (specialCharacters && lowerCase) {
      // special and uppercase
    }
    else if (upperCase) {
        // only cap letters
    }
    else if (lowerCase) {
      // only lowercase letters
    }
    else if (specialCharacters) {
      // only special characters
    }
      else{
        // no criteria
      }
      return password;
};

// Write password to the #password input
var writePassword = function (generatePassword) {
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// generatePassword(passLength);

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
