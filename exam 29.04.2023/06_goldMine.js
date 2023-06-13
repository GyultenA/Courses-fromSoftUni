function goldMine (input){
let index = 0;

let countLocation = Number (input[index]);
index++;

for (let i = 1; i <= countLocation; i++){
 

let avrgGyieldPerDay = Number (input[index]);
index++;

let dayCount = Number (input[index]);
index++;

let goldKg = 0;

let averageGoldLocation = 0

  

       for (let j = 1; j <= dayCount; j++){
        goldKg += Number (input[index]);
        index++;
       }
     
    
    averageGoldLocation = goldKg / dayCount;

       if (averageGoldLocation >= avrgGyieldPerDay){

        console.log (`Good job! Average gold per day: ${averageGoldLocation.toFixed(2)}.`)
       } else {
        let goldNeeded = avrgGyieldPerDay - averageGoldLocation;
        console.log (`You need ${goldNeeded.toFixed(2)} gold.`)
       }


  }



}

goldMine (["1",
"5",
"3",
"10",
"1",
"3"])

