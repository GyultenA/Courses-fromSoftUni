function processors (input){
let countProcessors =  Number (input[0]);
let countStaff = Number (input[1]);
let countWorkDays = Number (input[2]);

let totalHours = countStaff * countWorkDays * 8;
let produceProcessors = Math.floor(totalHours / 3);

let lessProcessors = countProcessors - produceProcessors;
let moreprocessors = produceProcessors - countProcessors;

if ( produceProcessors >= countProcessors){
    let profit = moreprocessors * 110.10;
    console.log (`Profit: -> ${profit.toFixed(2)} BGN`);
} else {
    let lostProfit = lessProcessors * 110.10;
    console.log (`Losses: -> ${lostProfit.toFixed(2)} BGN`);
}


}

processors (["150","7","18"])
