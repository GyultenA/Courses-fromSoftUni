function giftFromSanta (input){
    let adressN = Number (input[0]);
    let numAdrM = Number (input[1]);
    let numberS = Number (input[2]);

    let printNum = " ";

    for (let i = numAdrM; i >=adressN; i--){
       
        
      if ((i % 2 === 0) && (i % 3 ===0) && (numberS !==i)){
        printNum += `${i} `;

        
      } else if ((i % 2 === 0) && (i % 3 ===0) && (numberS ===i)){
        break;
     

    }
}


    console.log (printNum)

}

giftFromSanta (["1",
"30",
"15"])
;