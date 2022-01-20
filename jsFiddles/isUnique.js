function isUnique(text){

	for (let i =0; i< text.length;i++){
  	let letter = text[i];
  	for (let j=i+1; j<text.length;j++){//problem
    	if (letter == text[j]){
      		return "false";
      }
    }
  }
	return "true";
}

console.log(isUnique('abcde'));  // prints true
console.log(isUnique('abcdea')); // prints false

//1 run, 7.67
