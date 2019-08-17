// This version just parses the numbers into there respective columns

console.log("Number to convert: " + process.argv[2] + " Character count: " + process.argv[2].length);

var inputOnesCol = process.argv[2] % 10;
var inputTensCol = Math.floor((process.argv[2] % 100) / 10);
var inputHundredsCol = process.argv[2].length == 3 ? process.argv[2][0] : 0;

console.log("Tens: " + inputTensCol);
console.log("Ones: " + inputOnesCol);
console.log("Hundreds: " + inputHundredsCol);
