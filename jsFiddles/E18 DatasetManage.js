//3 Attempts, #1 DNF #2 DNF #3 24.16
//console.log(uhdata.length);

let testData = _.first(uhdata,uhdata.length);


function totalDegrees(data){

  let degrees = _.pluck(data,"AWARDS");

  let total = _.reduce(degrees, function(memo, num){ return memo + num; }, 0);
  return total;
}

function percentageHawaiian(data){
	let total = totalDegrees(data);
  //console.log(total);
  let hawaiian = totalDegrees(_.filter(data, function(num){ return num["HAWAIIAN_LEGACY"] === "HAWAIIAN"; }));

  //console.log(hawaiian);
  return (hawaiian/total) * 100;
}

console.log(totalDegrees(testData));
console.log(percentageHawaiian(testData));
