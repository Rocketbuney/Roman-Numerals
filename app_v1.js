// This version just understands what one individual character means, without any context

console.log("Number to convert: " + process.argv[2]);

var dictionary = [
	["i", 1],
	["v", 5],
	["x", 10],
	["l", 50],
	["c", 100],
]

for (var i = 0; i < dictionary.length; i++) {
	if (dictionary[i][1] == process.argv[2]) {
		console.log("Output: " + dictionary[i][0].toUpperCase());
	}
}
