function exam (input){
  let index = 0;

  let studentCount = Number (input[index]);
  index++;

  let sumGrades = 0;

  let countExellent = 0;
  let countGood = 0;
  let countNoGood = 0;
  let countFail = 0;

    for (let i = 1; i <= studentCount; i++){
      let grade = Number (input[index]);
      sumGrades += grade;

        if (grade >= 5.00){
            countExellent++;
        } else if (grade >= 4.00){
            countGood++;
        } else if (grade >= 3.00){
            countNoGood++;
        } else if (grade < 3.00){
            countFail++;
        }

     index++;

    }

    console.log (`Top students: ${((countExellent / studentCount)*100).toFixed(2)}%`);
    console.log (`Between 4.00 and 4.99: ${((countGood / studentCount) * 100).toFixed(2)}%`);
    console.log (`Between 3.00 and 3.99: ${((countNoGood / studentCount)*100).toFixed(2)}%`);
    console.log (`Fail: ${((countFail / studentCount)*100).toFixed(2)}%`);
    console.log (`Average: ${(sumGrades / studentCount).toFixed(2)}`);


}

exam (["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
