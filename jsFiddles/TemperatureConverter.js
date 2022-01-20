function temperatureConverter(temp,type){
	if (type=="F"){
  	let cel = ((temp-32)*5/9);
    return cel;
  }
  else if(type=="C"){
  	let far	= (temp*(9/5)+32);
    return far;
  }
  else{
  	return "Illegal temperature type";
  }
}


console.log(temperatureConverter(212, "F"));     // 100
console.log(temperatureConverter(0, "C"));       // 32
console.log(temperatureConverter(0, "X"));  		//invalid
