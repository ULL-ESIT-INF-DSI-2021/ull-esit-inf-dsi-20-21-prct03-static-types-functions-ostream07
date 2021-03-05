/*
function fromSnakeToCamelCase (snake_string) {  //sample_string o the_stealth_warrior
  var conver_to_capital: string = "";
  var patron: string = "_";
  var position: number = 0;
    for(var i: number = 0; i < snake_sz; i++) {
      if(snake_string.charAt(i) == patron) {
        snake_string = snake_string.replace(patron, "");
        position = i;
      } else {
        continue;
      }
    }
    var new_size: number = snake_string.length;
    var result: string = "";
    var back: string = "";
    for (var iter: number = 0; iter < new_size; iter++) {
      if(iter == position) {
        result = snake_string.substring(0, iter);
        conver_to_capital = snake_string.charAt(iter);
        conver_to_capital = conver_to_capital.toUpperCase();
        back = snake_string.substring(iter+1, new_size);
      }
    }
    snake_string = result + conver_to_capital + back;
    return console.log("Resultado de aplicar conversión: " + snake_string);
  } 
  
function fromCamelToSnakeCase (camel_string) {  //sampleString o theStealthWarrior
  var low_bar: string = "_";
  var patron: string = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var sz: number = 0;
  var beggining: string = "";
  var back: string = "";
  var sustitution: string = "";
  var to_lower: string = "";
  for(var i: number = 0; i < camel_string.length; i++) {
    for( var j: number = 0; j < patron.length; j++) {
        if(camel_string.charAt(i) == patron.charAt(j)) {
          beggining = camel_string.substring(0, i);
          sustitution = camel_string.charAt(i);
          to_lower = sustitution;
          to_lower = to_lower.toLowerCase();
          sustitution = low_bar;
          back = camel_string.substring(i+1, camel_string.length);
        }
      }      
  }
  camel_string = beggining + sustitution + to_lower + back;
  console.log("Resultado de aplicar conversión: " + camel_string);
}
  
  var snake_string: string = "sample_string";
  var snake_sz: number = snake_string.length;
  console.log("");
  console.log("Cadena a convertir formato Camel Case: " + snake_string);
  fromSnakeToCamelCase(snake_string);
  console.log("");
  console.log("**************************");
  var camel_string: string = "sampleString";
  var camel_sz: number = camel_string.length;
  console.log("Cadena a convertir formato Snake Case: " + camel_string);
  fromCamelToSnakeCase(camel_string);
  */