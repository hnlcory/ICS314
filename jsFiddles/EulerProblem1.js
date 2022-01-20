function projectEulerOne(max){
//compute n return print
let answer = 0;

for (let i = 0; i<max;i++){
	if (i%3==0 || i%5==0){
  	answer = answer+i;
  }
}
return answer;
}

console.log(projectEulerOne(1000));

//2 tries, #1: 6.56 but code wouldnt run, unresponsive #2: 5.46
