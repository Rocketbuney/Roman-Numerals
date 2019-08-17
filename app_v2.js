// This version just understands what one individual character means, with some context

console.log("Number to convert: " + process.argv[2] + " Character count: " + process.argv[2].length);

var output = '';

switch (process.argv[2][0]) {
	case "9":
		output += "IX"
		break;
	case "4":
			output += "IV"
			break;
	default:
		for (var i = 0; i < process.argv[2]; i++) {
			output += "I";
		}
}

console.log("Output: " + output);
