function sumAndProduct (input){
    let num = Number (input[0]);
    let sum = 0;
    let multiplicate = 0;

    let isFound = false

    let argA = 0
    let argB = 0
    let argC = 0
    let argD = 0
    let buff = "";

   while (isFound != true){
  
     for (let a = 1; a <= 9; a++){
        
  
         for (let b = 9; b >= a; b--){
          
            
          for (let c=1; c <= 9; c++){
             
  
               for (let d = 9; d >= c; d--){
                  sum = a+b+c+d;
                  multiplicate = a*b*c*d;
                  let currNum = Math.trunc(multiplicate / sum);
  
                  if ((sum === multiplicate) && (num % 10 === 5)) {
                     isFound = true
                     argA = a
                     argB = b
                     argC = c
                     argD = d
                     buff = `${a}${b}${c}${d} `
                      
                      break;
                  } else if  (currNum === 3 && (num % 3 ===0)){
                    isFound = true;
                    buff = `${d}${c}${b}${a} `
                          break;  
                       } 
        
                    }
                    if (isFound === true){
                     break;
                    }
                  }

                  if (isFound === true){
                     break;
                  }

                 
                  
               }

               if (isFound === true){
                  break;
               }
  
          }
          if (isFound === true){
            break;
          }
           

          
  
         }
  
       
          
   
  
     if (isFound === true){
      console.log (buff)
      } else {
      console.log ("Nothing found")
      }

   }
  
  
  
  sumAndProduct (["145"])