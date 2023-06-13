function puppyCare (input){
 let index = 0;
 let foodKg = Number (input[index]);
 index++;

 
 let totalGrams = foodKg * 1000;
 let gramsDays = 0;

 let command = input[index];
 index++;


    while (command !== "Adopted"){
     let dayFoodGrams = Number (command);
     gramsDays += dayFoodGrams;




        command = input[index];
        index++;
    }

    if (totalGrams >= gramsDays){
        let foodEnough = totalGrams - gramsDays;
        console.log (`Food is enough! Leftovers: ${foodEnough} grams.`);
    } else {
        let foodNeeded = gramsDays - totalGrams;
        console.log (`Food is not enough. You need ${foodNeeded} grams more.`)
    }


}

puppyCare (["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])


