function moon (input){
 let avrSpeed = Number (input[0]);
 let ltFuelFor100 = Number (input[1]);
 let toMoonAndBack = 2 * 384400;
 let timeNeeded = Math.ceil(toMoonAndBack / avrSpeed);

 let totalTime = timeNeeded + 3;
 let totalFuel = (ltFuelFor100 * toMoonAndBack) / 100;


 console.log (totalTime);
 console.log (totalFuel);



}

moon (["10000","5"])
