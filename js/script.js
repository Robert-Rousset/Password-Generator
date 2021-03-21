// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
//All possible Characters
var lowerCaseCodes = arrayFromLowToHigh(97, 122);
var upperCaseCodes = arrayFromLowToHigh(65, 90);
var numberCodes = arrayFromLowToHigh(48, 57);
var symbolCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)
).concat(arrayFromLowToHigh(91, 96)
).concat(arrayFromLowToHigh(123, 126));

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)    
  }
  return array
}

function generatePassword (characterLength, lowercase, uppercase, numbers, symbols){
  var charCodes = []
  if (lowercase === true) charCodes = charCodes.concat(lowerCaseCodes)
  if (uppercase === true) charCodes = charCodes.concat(upperCaseCodes)
  if (numbers === true) charCodes = charCodes.concat(numberCodes)
  if (symbols === true) charCodes = charCodes.concat(symbolCodes)
  
  var passwordCharacters = []
  for (let i = 0; i < characterLength; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
    
  }
  return passwordCharacters.join("")
}

function lengthPrompt(){
  characterLength = prompt("How many characters? (between 8 and 128)", characterLength)
  if(characterLength >= 8 && characterLength <= 128) {
    console.log(characterLength +" characters chosen")
    passwordPrompts();
  }
  else 
  lengthPrompt()
}

function passwordPrompts (){
  //LOWERCASE PROMPT//
  if (confirm("Would you like lowercase?")) {
    lowercase = true;
    console.log('Include lowercase.');
  } else {
    lowercase = false;
    console.log('Do not include lowercase.');
  }
  //UPPERCASE PROMPT//
  if (confirm("Would you like uppercase?")) {
    uppercase = true;
    console.log('Include uppercase characters.');
  } else {
    uppercase = false;
    console.log('Do not include uppercase characters.');
  }

  //NUMBER PROMPT//
  if (confirm("Would you like numbers?")) {
    numbers = true;
    console.log('Include Numbers.');
  } else {
    numbers = false;
    console.log('Do not include numbers.');
  }

  //SYMBOL PROMPT//
  if (confirm("Would you like symbols?")) {
    symbols = true;
    console.log('Include Symbols.');
    writePassword()
  } else {
    symbols = false;
    console.log('Do not include Symbols.');
    writePassword()
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterLength, lowercase, uppercase, numbers, symbols);
  var passwordText = document.querySelector("#password");
  if (lowercase === false && uppercase === false && numbers === false && symbols === false ) {
    alert("You have not chosen any characters for your password");
  }
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", lengthPrompt);