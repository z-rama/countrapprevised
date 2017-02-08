var fs = require ('fs');

var jsonreador = require ("./json-file-reader2.js"); // dit heb ik eraan toegevoed. Dit hoort dus de andere file te lezen.

var countryName = process.argv[2];    // this is bullet 1 from part 1   // this is the terminal

// fs.readFile ('./countries.json', 'utf-8', function(err, data) {     //deze link moet ik even aanpassen

// 	if (err) {
// 		throw err;



function randomName (countryParameter){

	for (i = 0; i < countryParameter.length; i++) {
	if (countryParameter[i].name === countryName) {
		console.log ("Country:" + countryParameter[i].name);
		console.log ("Top level domain:" + countryParameter[i].topLevelDomain);
	}
}
}

jsonreador("./countries.json", randomName);

// console.log (countryName + 'is a nice country'); 
// console.log (' country: ' + countryName)
// console.log (' Top level domain:' + tld) // I think I have to make a var tld - Not sure what the value should be

