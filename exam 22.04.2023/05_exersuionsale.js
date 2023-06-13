function tripSale (input){
    let index = 0;


  let seaTripCount = Number (input[index]);
  index++;
  let mountainTrip = Number (input[index]);
  index++;

  let command = input[index];
  index++


  let profit = 0;
  


   while (command !== "Stop"){

        if (seaTripCount === 0 && mountainTrip === 0){
        break;
        }

        if (command === "sea" && seaTripCount !==0){
            profit += 680
            seaTripCount -= 1;

        } else if (command === "mountain" && mountainTrip !==0){
            profit += 499;
            mountainTrip -= 1;
             
        }
        
        


        command = input[index];
        index++;

   }

    if (seaTripCount === 0 && mountainTrip === 0){
        console.log ("Good job! Everything is sold.");
        console.log (`Profit: ${profit} leva.`);

    } else {
        console.log (`Profit: ${profit} leva.`);
    }

  


}

tripSale (["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

