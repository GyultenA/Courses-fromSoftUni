function partyShop (input){
let typeCake = input [0];
let countOrder = Number (input[1]);
let dayOfDecember = Number (input[2]);
let totalPrice = 0;

switch (typeCake){
  case "Cake":
       if (dayOfDecember <= 15){
        totalPrice = countOrder * 24;
       } else {
        totalPrice = countOrder * 28.70;
       }
    break;


  case "Souffle":
    if (dayOfDecember <= 15){
        totalPrice = countOrder * 6.66;
    } else {
        totalPrice = countOrder * 9.80;
    }
    break;
    
    
   case "Baklava":
    if (dayOfDecember <= 15){
        totalPrice = countOrder * 12.60;
    } else {
        totalPrice = countOrder * 16.98;
    }
    break; 

}

if(dayOfDecember <= 22 && (totalPrice >=100 && totalPrice <=200)){
    totalPrice *= 0.85;
} else if ( dayOfDecember <= 22 && totalPrice > 200){
   totalPrice *= 0.75;
} 

if (dayOfDecember <= 15){
    totalPrice *= 0.90;
}

console.log (totalPrice.toFixed(2));

}

partyShop (["Souffle",
"20",
"24"])

