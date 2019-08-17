// This version just parses the numbers with context

console.log("Number to convert: " + process.argv[2] + " Character count: " + process.argv[2].length);

var output = '';

var inputOnesCol = process.argv[2] % 10;
var inputTensCol = Math.floor((process.argv[2] % 100) / 10);
var inputHundredsCol = process.argv[2].length == 3 ? process.argv[2][0] : 0;

console.log("Ones: " + inputOnesCol);
console.log("Tens: " + inputTensCol);
console.log("Hundreds: " + inputHundredsCol);

// Process hundreds
if (inputHundredsCol < 4) {
	for (var i = 0; i < inputHundredsCol; i++) {
		output += "C";
	}
} else if (inputHundredsCol == 4) {
	output += "CD";
} else if (inputHundredsCol == 5) {
	output += "D";
} else if (inputHundredsCol > 5 && inputHundredsCol < 9) {
	output += "D";

	for (var i = 0; i < inputHundredsCol - 5; i++) {
		output += "C";
	}
} else if (inputHundredsCol == 9) {
	output += "CM";
}

// Process tens
if (inputTensCol < 4) {
	for (var i = 0; i < inputTensCol; i++) {
		output += "X";
	}
} else if (inputTensCol == 4) {
	output += "XL";
} else if (inputTensCol == 5) {
	output += "L";
} else if (inputTensCol > 5 && inputTensCol < 9) {
	output += "L";

	for (var i = 0; i < inputTensCol - 5; i++) {
		output += "X";
	}
} else if (inputTensCol == 9) {
	output += "XC";
}

// Process Ones
if (inputOnesCol < 4) {
	for (var i = 0; i < inputOnesCol; i++) {
		output += "I";
	}
} else if (inputOnesCol == 4) {
	output += "IV";
} else if (inputOnesCol == 5) {
	output += "V";
} else if (inputOnesCol > 5 && inputOnesCol < 9) {
	output += "V";

	for (var i = 0; i < inputOnesCol - 5; i++) {
		output += "I";
	}
} else if (inputOnesCol == 9) {
	output += "IX";
}

console.log(output);
