// Assignment code here
var specialCharacters = (Boolean);
var upperCase = (Boolean);
var lowerCase = (Boolean);
var passLength = 8;

var criteria = "";
var password = "boo";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// asklegnth function
var askLength = function() {
   passLength= window.prompt("How long do you want your password to be?");

  if (!passLength) {
    var redoConfirm = window.confirm("You must choose a length, would like to try again?");
    if(redoConfirm) {
      askLength();
      console.log("yes")
    }
    else {
      passLength = 8;
      return passLength;
    }
    console.log(passLength)
  }
  return passLength;
};
  // letter generator 
  var letterGenerator = function(criteria,passLength) {
    switch(criteria){
      case "1":
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_}{|][:;'?><`~";
        length = passLength;
        console.log("we made it this far");
        for (var i=0; i < passLength; i++){
         password = Math.floor(Math.random() * passLength) 
        }
        writePassword();
        
    }

    return (Math.floor(Math.random() * criteria.charset) + length + 1);
  };

  // generate password
var generatePassword = function(passLength) {
  passLength = askLength();
  

  specialCharacters = window.confirm("Do you want special characters? Click cancel if no.");
  
  upperCase = window.confirm("Do you want capital letters? Click cancel if no.");

  lowerCase = window.confirm("Do you want lowercase letters? Click cancel if no.");
  
  // special characters & capitals
  if (specialCharacters && upperCase && lowerCase) {
    // all three capital letters, lowercase and special characters
    criteria = "1";
    }
    else if (specialCharacters && upperCase) {
        // special and uppercase
        criteria = "2";
    }
    else if (lowerCase && upperCase) {
      // special and uppercase
      criteria = "3";
    }
    else if (specialCharacters && lowerCase) {
      // special and uppercase
      criteria = "4";
    }
    else if (upperCase) {
        // only cap letters
        criteria = "5";
    }
    else if (lowerCase) {
      // only lowercase letters
      criteria = "6";
    }
    else if (specialCharacters) {
      // only special characters
      criteria = "7";
    }
      else{
        // no criteria
        citeria = "1";
      }
  letterGenerator(criteria,passLength);
};

// Write password to the #password input
var writePassword = function (password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password.value;
};


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
console.log(password.length);

