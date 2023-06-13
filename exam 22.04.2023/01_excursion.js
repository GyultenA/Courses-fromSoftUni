function exursion (input){
  let peopleCount = Number (input[0]);
  let countNight = Number (input[1]);
  let countCard = Number (input[2]);
  let countTickets = Number (input[3]);


  let nightPrice = countNight * 20;
  let cardPrice = countCard * 1.60;
  let ticketPrice = countTickets * 6;

  let totalForPerson = nightPrice + cardPrice + ticketPrice;
  let totalSum = peopleCount * totalForPerson;
  let total = (totalSum *0.25) + totalSum
  
  console.log (total.toFixed(2));


}

exursion (["20",
"14",
"30",
"6"])
