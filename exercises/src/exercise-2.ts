/*
function decimalToFactorial(num) {
  if (num > 0) {
    var v_fact: number = 0;
    while(v_fact < num) {
      var tmp: number = 0;
      for (var i: number = 0; i < num; i++) {
        if (i == 0 || i == 1) {
          v_fact = 1;
        } else if (v_fact * (i+1) < num){
            v_fact = v_fact * i;
            tmp = i;
          }
        }
        var result1: number = 0;
        var result: number = 0;
        for( var j: number = tmp; j >=0; j--) {
          result1 = Math.trunc(num / v_fact); // 463 / 120 = 3 103
          num = num % v_fact;
          v_fact = v_fact / j;
          console.log(result1, `x`, j,`!`);
        }
        return 0;
    }
  } else return -1;
}

function factorialToDecimal(factorial) {
    var solution = new Array();
    var final_solution = new Array();
    var result: string = "";
    var solution_sz: number = 0;
    var sol: number = 0;
    var entero: number = 0;
    var inverse: number = 0;
    var v_entero: number = 0;
    
    var counter: number = 0;
    for( var i: number = 0; i < factorial_sz; i++) {
      if(factorial.charCodeAt(i) >= 48 && factorial.charCodeAt(i) <= 57) {
        solution[solution_sz] = factorial.charCodeAt(i);
        solution_sz ++;
        //console.log(solution);
      }
    }
    for (var iter: number = 0; iter < solution_sz; iter++){
      if (iter % 2 == 0) {
        parseInt(solution[iter]);
        entero = solution[iter];
        entero = entero - 48;
      } else if(iter % 2 != 0) {
        result = solution[iter]; // 53
        sol = parseInt(result);
        sol = sol - 48;
        //console.log(sol);
        for(var j: number = 0 ; j <= sol; j++){
          if (j == 0 || j == 1) {
            inverse = 1;
          } else
          inverse = inverse * j;
        }
        //console.log("es: "+inverse.length);
        //console.log(inverse[counter]);
        counter++;
        final_solution[iter] = entero;
        final_solution[iter] = final_solution[iter] * inverse;
        v_entero = v_entero + final_solution[iter];
        //console.log(v_entero);
      }
    }
    return console.log("El decimal es: "+v_entero);
}

  var num: number = 463;
  console.log("");
  console.log(num +" descompuesto es: ");
  (decimalToFactorial(num));
  console.log("");
  console.log("*************************");
  var factorial: string = "3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0!";
  console.log("Cadena: "+ factorial);
  factorial = factorial.replace(/ /g, "");
  var factorial_sz: number = factorial.length;
  factorialToDecimal(factorial);
*/