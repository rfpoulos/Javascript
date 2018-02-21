// Print Numbers
function printNumbers(startNumber, endNumber) {
	for (var count=startNumber; count <= endNumber; count++) {
		console.log(count);
	}
};
printNumbers(1,10);

// Print a Square
function printSquare(number) {
	for (var count=1; count <= number; count++) {
		console.log('*'.repeat(number))
	}
}

printSquare(5)

// print a box
function printBox(num1, num2) {
	console.log('*'.repeat(num1))
	for (var count=1; count<=num2-2; count++){
		console.log('*' + ' '.repeat(num1-2) + '*')
    }
	console.log('*'.repeat(num1))
};

printBox(6,4);

// Print a Banner
function printBanner(text) {
	var len = text.length; {
	console.log('*'.repeat(len+4))
	console.log('* '+ text + ' *')
	console.log('*'.repeat(len+4))
	}
};

printBanner("Digital Crafts")



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

factors(25);


// Leetspeak
var character = {
	a : '4',
	e : '3',
	g : '6',
	l : '1',
	o : '0',
	s : '5',
	t : '7'
  }
  
  function leetspeak(string) {
	  res = ''
	  for (i of string){
		  if (character[i]) {
			res += (character[i])
		  }
		  else{
			res += i
		  }
	  }
	  return res;
  }
  
  console.log(leetspeak("leet"))

//   // Leetspeak version 2
// var character = {
// 	a : '4',
// 	e : '3',
// 	g : '6',
// 	l : '1',
// 	o : '0',
// 	s : '5',
// 	t : '7'
//   }
  
//   function leetspeak(string) {
// 	  res = ''
// 	  for (let i = 0; i < string.length; i++) {
// 		  if (character[string[i]]){
// 			res += (character[string[i]])
// 		  }
// 		  else{
// 			res += string[i]
// 		  }
// 	  }
// 	  return res;
//   }
  
//   console.log(leetspeak("I like programming and long rest"))


//Long-long Vowels
function longLongVowels(text) {
	var vowel = text.replace(/oo/g, 'ooooo');
	vowel = vowel.replace(/ee/g, 'eeeee');
	return vowel
}

console.log(longLongVowels('good'))
console.log(longLongVowels('Cheese'))
console.log(longLongVowels('Man'))

