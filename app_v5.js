// This version just parses the numbers with context - tidied

console.log("Number to convert: " + process.argv[2] + " Character count: " + process.argv[2].length);

var output = '';

var inputOnesCol = process.argv[2] % 10;
var inputTensCol = Math.floor((process.argv[2] % 100) / 10);
var inputHundredsCol = process.argv[2].length == 3 ? process.argv[2][0] : 0;

console.log("Ones: " + inputOnesCol);
console.log("Tens: " + inputTensCol);
console.log("Hundreds: " + inputHundredsCol);

function computePlaceValue(inputNum, caseValues) {
	if (inputNum < 4) {
		for (var i = 0; i < inputNum; i++) {
			output += caseValues[0];
		}
	} else if (inputNum == 4) {
		output += caseValues[1];
	} else if (inputNum == 5) {
		output += caseValues[2];
	} else if (inputNum > 5 && inputNum < 9) {
		output += caseValues[2];

		for (var i = 0; i < inputNum - 5; i++) {
			output += caseValues[0];
		}
	} else if (inputNum == 9) {
		output += caseValues[3];
	}
}

computePlaceValue(inputHundredsCol, ['C', 'CD', 'D', 'CM']);
computePlaceValue(inputTensCol, ['X', 'XL', 'L', 'XC']);
computePlaceValue(inputOnesCol, ['I', 'IV', 'V', 'IX']);

console.log("Result: " + output);
