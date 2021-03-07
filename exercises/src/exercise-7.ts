function calcularNumeroMayor(numero: string) {
  var numeros: number[] = [];
  var resguardoNumero: number;

  //Insertamos en un vector uno a uno
  for (var i: number = 0; i < numero.length; i++) {
    numeros.push(parseInt(numero.split("")[i]));
    //console.log(numeros[i]);
  }
  // Averiguamos vamos intercambiando valores
  for (var i: number = numeros.length - 1; i > 0; i--) {
    resguardoNumero = numeros[i];
    if (numeros[i] > numeros[i - 1]) {
      numeros[i] = numeros[i - 1];
      numeros[i - 1] = resguardoNumero;
      break;
    }
  }
  // Si obtenemos un número distinto al que nos han pasado
  if(numeros.join("") != numero){
    return parseInt(numeros.join("")); 
  }
  return -1;
}

var numero: string = "123";
console.log("Número: " + numero);
console.log("El valor inmediatamente mayor es: ", calcularNumeroMayor(numero));