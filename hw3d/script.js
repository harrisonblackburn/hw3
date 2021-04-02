// Assignment Code
var generateBtn = document.querySelector("#generate");

//initialize empty string for password input



function writePassword() {
  console.log ("harrison")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  let password = "";
  $("#generate").one("click", generatePassword() {
    // Add content...
});
  

 
  var passwordLength = parseInt(
    prompt("Please enter the length of the password")
  );

console.log(passwordLength);
console.log(typeof passwordLength);
 
if(passwordLength < 8) {
  alert ("Password should be at least 8 characters");
}
else if(passwordLength > 128){
  alert ("Please enter a password that does not exceed 128 characters");
}


length = passwordLength



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log('Hithub change test')
