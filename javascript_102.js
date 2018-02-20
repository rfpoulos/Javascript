// Print Numbers
function printNumbers(startNumber, endNumber) {
	for (var count=startNumber; count <= endNumber; count++) {
		console.log(count);
	}
}

// Print a Square
function printSquare(number) {
	for (var count=1; count <= number; count++) {
		console.log('*'.repeat(number))
	}
}

// print a box
function printBox(num1, num2) {
	console.log('*'.repeat(num1))
	for (var count=1; count<=num2-2; count++){
		console.log('*' + ' '.repeat(num1-2) + '*')
    }
	console.log('*'.repeat(num1))
}

// Print a Banner
function printBanner(text) {
	var len = text.length; {
	console.log('*'.repeat(len+4))
	console.log('* '+ text + ' *')
	console.log('*'.repeat(len+4))
	}
}

// Factor a number 
function factors(x){
	var factorsList = [];
	let i = 0;
	while (i <= x){
		if (x % i == 0){
			factorsList.push(i)
		}
		i++;
    }
	console.log(factorsList)		
};

return factors(25)

// Caesar Cipher

var cipher = function(text) {

} 

