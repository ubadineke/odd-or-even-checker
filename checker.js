//Checks if a number is odd or even
//Takes in a number
//Splits the number into an array and picks the last element
//Loops through a set of numbers, checks if the last element is part of that set
//Returns even or odd as the case might be

var number = prompt("Enter the number you want to be checked"); //Takes input from user;

let digits = []; //Initializes array
let lastNo;

//Splits the number into an array
function splitToArray(num) {
  for (i = 0; i < num.length; i++) {
    digits.push(parseInt(num.charAt(i)));
  }
  console.log(digits);
}

//Extract the last element of the array
function extractLastElement(array) {
  lastNo = array.slice(-1)[0];
  console.log(lastNo);
}

//Takes last element and compares with an array of defined numbers
function checkStatus(val) {
  let checkArr = [2, 4, 6, 8, 10];
  if (checkArr.includes(val)) {
    console.log("This is an EVEN number");
  } else console.log("This is an ODD number");
}

splitToArray(number);
extractLastElement(digits);
checkStatus(lastNo);
