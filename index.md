# Desarrollo de Sistemas Informáticos
## Práctica 3. Tipos de datos estáticos y funciones

A lo largo de este informe, pasaremos a ver las soluciones propuestas a los ejercicios.

### Ejercicio 1. Cree una función isLeapYear que devuelva si un año concreto es bisiesto o no.

El objetivo es conseguir que dado un año a la función `isLeapYear`, nos indique si es bisiesto o no.
La resolución es sencilla, simplemente tenemos que aseguarnos de que el resto al dividir el año por 4 es 0, y que además, también tiene que cumplir que al ser dividido por 100, sea distinto de 0. La otra opción, que debemos mirar en caso de que o se cumplan ninguna de estas condiciones, es comprobar si este año, al ser dividido por 400, da como resto 0.
Si cumple lo descrito anteriormente, la función devolverá **true**, en caso contrario, devolverá **false**.
Ejemplo de resultado al ejecutar el programa:

```
¿El año 1924 es bisiesto?: true
¿El año 1777 es bisiesto?: false
```

### Ejercicio 2. El objetivo es crear un función, que sea capaz de descomponer un número en factoriales y otra que sea capaz de dada la descomposición, recomponer de nuevo el número en decimal.

Este ejercicio tiene una mayor complejidad. Para la primera función, `decimalToFactorial(num)`, necesiamos antes de nada, encontrar el factorial inmediatamente más pequeño al número que se nos ha proporcionado. En nuestro ejemplo, `463`, el factorial inmediatamente más pequeño es `5! que tiene como valor 120`.

Una vez sabemos eso, debemos ir dividiendo nuestro número 463, entre los factoriales. A modo de ejemplo, 463 / 5!, tiene como cociente 3 y como resto 103. Guardamos el cociente (3) en una variable resultado, y establecemos un contador para que los factoriales vayan disminuyendo con cada iteración.

Ahora, nuestro número debe machacarse pasando a ser `103` y el factorial debe ir reduciéndose, siendo ahora `4!`. Y así hasta que lleguemos al factorial de 0, donde se sumará un 1.

Finalmente, debemos tener una salida por pantalla de esta forma:
```
463 descompuesto es: 
3 x 5 !
4 x 4 !
1 x 3 !
0 x 2 !
1 x 1 !
0 x 0 !
```

Si comprobamos la suma de todos esos valores, obtendremos el número 463.

La segunda función, `factorialToDecimal(factorial)`, debe comvertir una cadena como la siguiente `3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0!` en un número decimal, en este caso, vemos que es la que corresponde con 463.

Lo primero es eliminar los espacios en blanco usando el método `replace(/ /g, "")`, dejando solo caracteres en la cadena.
A continuación, nos centraremos en saber cuáles son los números dentro de los caracteres que tenemos. Para ello, el método `charCodeAt()` nos va a permitir filtrar los números. Este método devuelve el Unicode del carácter de un índice especificado en la cadena. Los números se encuentran entre los caracteres 48 y 57, y para convertirlos a nuestro formato habitual, (0-9), solo tenemos que restarles 48.

Teniendo ahora solamente los números, tenemos que distinguir entre los que serán cociente y los que serán factoriales, para ello nos basaremos en sus **posiciones**, si es una posición par, serán cocientes, si es impar, serñan factoriales.
Si es un cociente, solo tendremos que guardarlo, pero si es factorial, debemos hacerlo multiplicarse por si mismo mientras va disminuyendo, es decir, en el caso del 5!, la la ejecución será esta: `5x4x3x2x1x1 = 120`, y almacenaremos el valor final.
Más tarde, al tener todos los valores factoriales, debemos multiplicar simplemente cada uno, guardaos en arrays, por el ue se encuentra en su misma posición, y finalmente, sumar todos los resultados hasta obtener el número final como se puede ver a continuación:
```
Cadena: 3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0!
El decimal es: 463
```

### Ejercicio 3. Este trata de conseguir averiguar si en una cadena donde primero aparece un número, y después letras, ambos corresponden, es decir, si tenemos un 3, deben ir tres letras que le preceden, si fuera un 10, diez letras.

Para resolverlo, solo hay que comparar el tamaño del texto, con el de los números que hay antes de ellos en un simple if:
```
if (num_1 == text1_sz && num_2 == text2_sz && num_3 == text3_sz) {
      return true;
  }
  else
      return false;
}
```
Si todos coinciden, la función debe devolver **true**, sino, la salida será **false**. 
Ejemplo de salida sobre la ejecución del programa: 
```
La cadena 3hey5hello2hi es: true
```

### Ejercicio 4. Nos presentan dos estilos diferentes a la hora de nombrar variables; Camel Case, palabras con su primera letra en mayúscula y Snake Case, donde son palabras en minúscula separadas por guiones.

Primero veamos la función `fromSnakeToCamelCase (snake_string)`, donde pasada una string en formato  Snake Case, debemos convertira en Camel Case.
Como en ejercicios anteriores, nos servirá de ayuda el método `charCodeAt()`, para localizar el símbolo **_** establecido como `patron`, y sustituirlo por `""` haciendo que este desaparezca. La función `replace(patron, "")` nos ayudará de esta manera a realizarlo.
Èl siguiente paso es dividir a la cadena, separando lo anterior a localizar el patrón, podemos lograrlo con `substring()`.
Guardamos la cadena y posteriormente, a la letra que se encuentra una posición más allá, aplicarle otro de los métodos disponibles, `toUpperCase()` que transforma letras de minúscula, a mayúscula.

Finalmente solo nos queda realizar una concatenación de ambas para volver a tener nuestra cadena de la siguiente manera:

```
Cadena a convertir formato Camel Case: sample_string
Resultado de aplicar conversión: sampleString
```

La otra función, `fromCamelToSnakeCase (camel_string)` tiene un funcionamiento similar, solo que en este caso debemos localizar la mayúsculas, convertirlas en minúscula, y en la posición que se encuentra justo antes, situar `low_bar = "_"`.

Nuestro patrón en este caso, son todas las letras en mayúsculas, si en nuestra cadena, detectamos una coincidencia, podremos aplicar `substring()` como en el caso anterior y luego a esa parte extraída, concatenarle `low_bar`.
El paso siguiente es usar el método `toLowerCase()` para convertir mayúsculas en minúsculas, tras lo cuál podremos volver a concatenarlas teniendo una cadena del tipo Snake Case:
```
Cadena a convertir formato Snake Case: sampleString
Resultado de aplicar conversión: sample_string
```

### Ejercicio 5. Nuestro amigo Chuck Norris, necesitaba que en un sola línea de código se puediera eliminar las aes y ees de todas las palabras, así como luego ordenar estas alfabéticamente y para terminar, si se incluía una cadena vacía, debía retornar Broken.

Llamamos a la función `onePunch(punch)` donde le pasamos una string con las frases a tratar:
```
onePunch(‘Beard Jeans Hairbrush Knuckleduster Sand’)
onePunch(‘Sock Beard Vest Lady Sage’)
onePunch(‘Beard Sack Gun Parachute Face-Kicking-Shoes’)
onePunch(‘Snot Snow Soda Tank Beard’)
onePunch(‘’)
```

Con la ayuda de la concatenación de varios métodos como `replace(/[ae]/g, "")` para eliminar las letras, `.split(" ") ` para separar las por espacios en blanco, `.sort()` para ordenarlas alfabéticamente y `.join(" ")` para volver a unirlas, podemos cumplir la tarea, con un oporador ternario antes, para asegurarnos de que devuelva **Broken**, si es una cadena vacía:

```
Brd Hirbrush Jns Knuckldustr Snd
Brd Ldy Sg Sock Vst
Brd Fc-Kicking-Shos Gun Prchut Sck
Brd Snot Snow Sod Tnk
Broken
```

### Ejercicio 6. El objetivo es tranformar un código ISBN a un número decimal por medio de una fórmula y que al dividir este por 11, el resto sea 0, en caso contrario el ISBN no será válido.

La fórmula es la siguiente, dado un ISBN como este `3-598-21508-8`, debemos convertirlo a decimal de la siguiente manera, `3x10 + 5x9 + 9x8 + 8x7 + 2x6 + 1x5 + 5x4 + 0x3 + 8x2 + 8x1 = 264`  **264 / 11 = 0, ISBN válido**. Además, si en la última cifra, se encuentra una x, esta debe ser sustituida por un 10, por ejemplo para el ISBN `3-598-21507-x`, la fórmula debe de ser `3x10 + 5x9 + 9x8 + 8x7 + 2x6 + 1x5 + 5x4 + 0x3 + 7x2 + 10x1 = 264, 264 / 11 = 0, ISBN válido`.

Utilizando nuevamente los caracteres de Uicode entre 48 y 57 para filtrar números por medio de `charCodeAt()`, podremos extraer estos, para paso seguido utilizar el método `parseInt()` que transforma estos caracteres a enteros, siendo manipulables ahora en operaciones matemáticas. Guardamos todos los caracteres y creamos una nueva variable con el tamaño de la nueva cadena, que es 10. Esta valor a ir disminuyendo en cada iteración para poder hacer que cada número vaya siendo multiplicado con números de 10 hasta 1 y el resultado de cada una de ellas, se guardará, sumándole el de todas iteraciones hasta acabar. Finalmente, comprobamos que el valor final sea una `x`, en caso de serlo, sumaremos 10, y sino continuaremos con nuestro proceso. El resultado debe ser el siguiente:
```
Código ISBN: 3-598-21507-x
Comprobando validez... 
ISBN es: 264
true
```

### Ejercicio 7. Dado un número, tenemos que conseguir que nos den el número inmediatamente mayor, en caso de que ya sea el mayor con esa combinación de cifras, devolvemos -1.

Creamos una función `calcularNumeroMayor(numero: string)` a la que le pasamos una string con el valor numérico.
Hacemos uso de `numeros.push(parseInt(numero.split("")[i]))` para ir almacenando, como entero en un vector cada uno de las cifras que conforman el número. 
Almacenamos el último valor y desde atrás hacia delante, si el número de la posición actual es mayor que el de a posición anterior, los intercambiamos.
Una vez realizadas estas operaciones, si el valor resultante es otro del original podemos devolverlo:

```
Número: 123
El valor inmediatamente mayor es:  132
```
```
Número: 21
El valor inmediatamente mayor es:  -1
```

### Ejercicio 8. Necesitamos averiguar el número de IPs disponibles entre un rango establecido.

Necesitaremos de un función que llamaremos `ipsInRange(ip1, ip2)` y que va a reibir dos IPs, haciendo uso del método `ip1.split(".")` vamos a eliminar los puntos en las IP, guardando las cadenas resultantes en unas variables nuevas.
Si existe un valor en la posición del penúltimo dígito que sea distinto de 0, como **10.0.1.0**, entonces a ese 1, le sumamos 256, consiguiendo que nos indique el valor de IPs que hay entre **10.0.1.0** y **10.0.0.0**.
Si el valor de esta posición fuera 0, entonces solo debemos restar los valores de la posición final para lograr el intervalo.

```
La ip1 debe ser la mayor para realizar la resta
Valor Ip1: 10.0.1.0
Valor Ip2: 10.0.0.10
**********************
Ips disponibles: 246
```
```
La ip1 debe ser la mayor para realizar la resta
Valor Ip1: 10.0.3.0
Valor Ip2: 10.0.0.50
**********************
Ips disponibles: 208
```

### Ejercicio 9. Un combate Pokémon. Queremos saber si somos un buen entrenador y queremos saber el daño que le hemos realizado al pokémon de nuestro oponente, además hemos introducido mejoras para saber cuánto daño nos han hecho a nosotros.

Definimos los tipos `Agua`, `Fuego`, `Hierba` y `Eléctrico`, y establecemos en comparaciones dentro de varios if, todas las opciones posibles cuando un ataque del pokémon1 es súper efectivo contra el pokémon2 y viceversa, y de igual forma cuando son poco eficaces o neutros.
Damos un ataque y defensa a cada uno de los contendientes y pasamos al cálculo de daño con la siguiente fórmula `daño = 50 * (ataque / defensa) * efectividad`.
En una batalla entre un pokémon de tipo **Eléctrico** con **180 de ataque y 204 de defensa** y un pokémon de tipo **Fuego** con **160 de ataque y 204 de defensa**, estos serán los resultados de la batlla:
```
Entrenador1: Elijo un pokemon tipo: Electrico
Entrenador2: Pues yo a un pokemon tipo: Fuego

********************
*     Battle!!     *
********************

El ataque del tipo Electrico causa al pokemon tipo Fuego 44.12 de daño
El ataque del tipo Fuego causa al pokemon tipo Electrico 39.22 de daño
```

### Ejercicio 10. Averiguar si un nombre de usuario es válido partiendo de unas reglas:
```
El nombre de usuario tiene que tener al menos 4 caracteres y no más de 30.
El nombre de usuario no puede empezar ni terminar con un guión bajo.
El nombre de usuario tiene que contener al menos una letra mayúscula, una letra minúscula, un número y algún símbolo especial ($,-,_).
No se permite la repetición de un mismo tipo de caracter más de dos veces seguidas.
```

Vamos a desarrollar 2 funciones, una llamada `isValidUsername(nombre: string)` donde dado un nombre de usuario, vamos a definir dentro las reglas descritas anteriormente por medio de expresiones regulares como por ejemplo la que necesitaremos para las letras mayúsculas `!/[A-Z]/`. Una vez establecidas las reglas, llamaremos a una segunda función llamada `verificarRepeticionesCaracter(nombre: string, numCaracteres: number)` facilitándole el nombre del Usuario y el número de caracteres de la cadena.
Todos los casos contarán con un contador, y en caso de superar el máximo de repeticiones de cada tipo de caracter permitidas, inmediatamente nos avisará de que ese nombre de usuario no es válido. Y en caso contrario, nos indicará que si lo es y cumple con todos los requisitos.

```
Nombre: F4f5f-6
Validando el nombre de usuario...
El nombre de usuario F4f5f-6 es válido
```
```
Nombre: F4f5f-666
Validando el nombre de usuario...
Se está repetiendo el caracter 6 más de dos veces consecutivas
```