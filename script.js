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

function generatePassword() {
  // Prompt for password length
  function passQLength() {
    var passLength = prompt(
      "How long do you want password (the password must be 8-128 characters long)?"
    );

    passLength = parseInt(passLength, 10);

    if (passLength > 8 && passLength < 128) {
      return passLength;
    } else {
      alert("Your password must be 8-128 characters long");
      return passQLength();
    }
  }

  passLength = passQLength();

  console.log(passLength);

  // Prompt to include lower case

  function passQInclude() {
    var passArr = [];
    var lowCaseArr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    var upCaseArr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var splCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    var passLowCase = confirm(
      "Press OK if you want your password to include lowercase?"
    );

    if (passLowCase === true) {
      var passArr = passArr.concat(lowCaseArr);
    }

    console.log(passArr);

    var passUpCase = confirm(
      "Press OK if you want your password to include upper case?"
    );

    // Prompt to include upper case

    if (passUpCase === true) {
      var passArr = passArr.concat(upCaseArr);
    }

    console.log(passArr);

    // Prompt to include special characters

    var passSplChar = confirm(
      "Press OK if you want your password to include special characters?"
    );

    if (passSplChar === true) {
      var passArr = passArr.concat(splCharArr);
    }

    console.log(passArr);

    // Prompt to include special numbers

    var passNum = confirm(
      "Press OK if you want your password to include number?"
    );

    if (passNum === true) {
      var passArr = passArr.concat(numArr);
    }

    console.log(passArr);

    // Alert if none of the options are selected

    if (
      passLowCase === false &&
      passUpCase === false &&
      passSplChar === false &&
      passNum === false
    ) {
      alert("Your password must one of the options selected");
      return passQInclude();
    }
    return passArr;
  }
  passArr = passQInclude();
  console.log(passArr);

  var newArr = [];
  for (i = 0; i < passLength; i++) {
    var character = passArr[Math.floor(Math.random() * passArr.length)];
    newArr.push(character);
  }
  console.log(newArr);
  return newArr.join("");
}
