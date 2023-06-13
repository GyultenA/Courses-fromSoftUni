function party(input){
 let partyPrice = Number (input[0]);
 let loveMesageCount = Number (input[1]);
 let figureCount = Number (input[2]);
 let keyCount = Number (input[3]);
 let caricatureCount = Number (input[4]);
 let luckyCount = Number (input[5]);

 let finalSum = 0;


 let totalSumItems = (loveMesageCount * 0.60) + (figureCount * 7.20) + (keyCount * 3.60) + (caricatureCount * 18.20) + (luckyCount * 22);
 let totalCount = loveMesageCount + figureCount + keyCount + caricatureCount + luckyCount;

 if (totalCount >= 25){
    let discount = totalSumItems * 0.35;
    finalSum = totalSumItems - discount;
 } else {
    finalSum = totalSumItems;
 }

  let profit = finalSum - (finalSum * 0.10 );

  if (profit >= partyPrice){
    console.log (`Yes! ${(profit - partyPrice).toFixed(2)} lv left.`)
  } else if (partyPrice > profit){
    console.log (`Not enough money! ${(partyPrice - profit).toFixed(2)} lv needed.`)
  }

}

party (["320",
"8",
"2",
"5",
"5",
"1"])

