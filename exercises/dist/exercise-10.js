function isValidUsername(nombre) {
    var numCaracteres = nombre.length;
    var letraComparar;
    if (!(numCaracteres >= 4) || !(numCaracteres <= 30)) {
        console.log("El número de caracteres no es correcto.");
    }
    // Comprobaciones
    if (nombre[0] === "_" || nombre[nombre.length - 1] === "_") {
        console.log("No se permiten guiones bajos en los extremos del nombre.");
    }
    if (!/[A-Z]/.test(nombre)) {
        console.log("Debe contener al menos una letra mayúscula");
    }
    if (!/[a-z]/.test(nombre)) {
        console.log("Debe contener al menos una letra minúscula");
    }
    if (!/[0-9]/.test(nombre)) {
        console.log("Debe contener al menos una número");
    }
    if (!/[$\-_]/.test(nombre)) {
        console.log("Debe contener al menos un caracter especial ($,-,_)");
    }
    letraComparar = verificarRepeticionesCaracter(nombre, numCaracteres);
    if (letraComparar) {
        console.log("Se está repetiendo el caracter " + letraComparar + " más de dos veces consecutivas");
    }
    else {
        console.log("El nombre de usuario " + nombre + " es válido");
    }
}
function verificarRepeticionesCaracter(nombre, numCaracteres) {
    var contadorReptCaracter = 0;
    var letraComparar = "";
    for (var i = 0; i < numCaracteres; i++) {
        letraComparar = nombre[i];
        for (var j = 0; j < numCaracteres; j++) {
            if (letraComparar === nombre[j]) {
                contadorReptCaracter++;
            }
            else {
                contadorReptCaracter = 0;
            }
            if (contadorReptCaracter > 2) {
                break;
            }
        }
        if (contadorReptCaracter > 2) {
            break;
        }
    }
    if (contadorReptCaracter > 2) {
        return letraComparar;
    }
    return "";
}
var nombre = "F4f5f-6";
console.log("Nombre: " + nombre);
console.log("Validando el nombre de usuario...");
isValidUsername(nombre);