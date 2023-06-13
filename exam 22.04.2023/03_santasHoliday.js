function santasHoliday (input){
 let daysToStay = Number (input[0]);
 let roomType = input [1];
 let rate = input [2];

 let countNight = daysToStay - 1;
 let stayPrice = 0;

  switch (roomType){
    case "room for one person": stayPrice = countNight * 18;
    break;

    case "apartment": stayPrice = countNight * 25;

       if (countNight < 10){
        stayPrice *= 0.70;
       }else if (countNight <= 15){
        stayPrice *= 0.65;
       } else {
        stayPrice *= 0.50;
       }

    break;

    case "president apartment" : stayPrice = countNight * 35;

    if (countNight < 10){
        stayPrice *= 0.90;
       }else if (countNight <= 15){
        stayPrice *= 0.85;
       } else {
        stayPrice *= 0.80;
       }

    break;
  }

  if (rate === "positive"){
     stayPrice *= 1.25;
  } else if ( rate === "negative"){
    stayPrice *= 0.90;
  }

  console.log (stayPrice.toFixed(2));





 }





santasHoliday(["30",
"president apartment",
"negative"])

