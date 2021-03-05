/*
function isValidISBN(check_ISBN) {
  var result: number = 0;
  var to_integer: number = 0;
  var size: number = 10;
  for(var i: number = 0; i < check_ISBN.length; i++) {
    if (check_ISBN.charCodeAt(i) >= 48 && check_ISBN.charCodeAt(i) <= 57) {
      to_integer = parseInt(check_ISBN.charAt(i));
      if (size > 0){
        to_integer = to_integer * size;
        result = result + to_integer;
        }
        size--;
    } if (i == check_ISBN.length - 1 && check_ISBN.charCodeAt(i) == 120) {
      result = result + 10;
    }
  }
  console.log("ISBN es: " + result);
  if (result % 11 == 0) {
    return console.log(true);
  }
  else return console.log(false);
}

var check_ISBN: string = "3-598-21507-x";
//"3-598-21508-8";
console.log("Código ISBN: " + check_ISBN);
console.log("Comprobando validez... ");
isValidISBN(check_ISBN);
*/