
function hoursPerWeek(data){
	if (data.length > 4 && data.length <8){
  	let sum=0;
  	for (i = 0; i < data.length; i++){
    	  sum += data[i];
    }
    if (sum > 9 && sum<26){
    	return true;
    }
  }
	return false;
}







// Output should be false: no values
console.log(hoursPerWeek([]));

// Output should be false: fewer than five values
console.log(hoursPerWeek([1, 2, 4, 8]));

// Output should be false: more than seven values
console.log(hoursPerWeek([1, 2, 3, 4, 5, 6, 7, 8]));

// Output should be false: sum of hours less than 10
console.log(hoursPerWeek([1, 1, 1, 1, 1, 1, 1]));

// Output should be false: sum of hours is greater than 20
console.log(hoursPerWeek([1, 2, 4, 8, 16]));

// Output should be true: five values, sum of 10
console.log(hoursPerWeek([2, 2, 2, 2, 2]));

// Output should be true: five values, sum of 12
console.log(hoursPerWeek([1, 1, 2, 3, 5]));

// Output should be true: six values, sum of 20
console.log(hoursPerWeek([1, 1, 2, 3, 5, 8]));

// Output should be true: seven values, sum of 14
console.log(hoursPerWeek([2, 2, 2, 2, 2, 2, 2]));
