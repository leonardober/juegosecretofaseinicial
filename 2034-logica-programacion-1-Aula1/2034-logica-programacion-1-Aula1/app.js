//alert('Hola Mundo');
//Declaramos yAsignamos  valor a la variable donde se almacena

//javascript1
/*alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(numeroSecreto);
if (eleccion == numeroSecreto) {
    alert('Adivinaste');
}*/

//javascript2
/*alert('Bienvenidos al juego de la contrasena');
let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

console.log(contrasenia);
if (contrasenia == contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}else  {
    alert('lo  siento contraseña incorrecta');
}*/


/*let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert('mensajeDeBienvenida');*/


alert('Bienvenidos al juego del número secreto');
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
/*definimos y declaramos valor de variable*/
let numeroUsuario = 0; //declaramos la variable antes del while
let intentos = 1;
//let palabraveces = 'vez';
let maximosIntentos = 3;
//definimos el tipo de dato
console.log(typeof(numeroSecreto)); 
while (numeroUsuario != numeroSecreto) {
    //convertimos numero de usuario de string a intque se almacena en variable numeroUsuario
         numeroUsuario = parseInt(prompt("Me indicas un n�mero entre 1 y %{numeroMaximoPosible} por favor:")); /*valor que da el usuario*/

        console.log(numeroUsuario);
        //comilla invertida Alt+96
    if (numeroUsuario == numeroSecreto) {  /*comparacion de condicion variables*/
        //${intentos == 1 ? 'vez': 'veces'} reempaza al if  y al else 
        //es usar template string y oprador ternario ${intentos} ${intentos == 1 ? 'vez': 'veces'}
        
            alert(`Felicitaciones, Acertaste, el n�mero es: ${numeroUsuario}.Lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`); //$ Template String da el valor almacenado en la variable
        } else {
            if (numeroUsuario > numeroSecreto) {
                alert('El numero secreto es menor');
            } else {
                alert('El numero secreto es mayor');
            }
           // intentos = intentos + 1; //implementamos e incrementamos el contador cuando no acierta
            // intentos += 1;
            intentos++; //forma mas comun de incrementadores
            //palabraveces = 'veces';
            if (intentos > maximosIntentos) {
                alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            }
            //la condicion no se cumplio
            //alert('lo  siento No acertaste el numero');
        }
}
//Ejemplo contador
/* La instrucción 'while (contador < 4){ }' inicia el bucle 'while'.
 Este continuará repitiendo el bloque de código dentro de las llaves { }
  mientras la condición 'contador < 4' sea verdadera.


¡Exactamente! Esa condición significa que el bucle continuará
 mientras el valor de la variable 'contador' sea menor que 4.

Alternativa correcta
El resultado final será la impresión de los mensajes "Ejecutando la iteración 1", 
"Ejecutando la iteración 2" y "Ejecutando la iteración 3" en la consola.


¡Exacto! El bucle se ejecutó tres veces, y el valor final de la variable 'contador' es 4.
 En la cuarta iteración, el valor de 'contador' es 4. 
 En ese momento, la condición 'contador < 4' se vuelve falsa, ya que 4 no es menor que 4. 
/*let contador = 1;

while (contador < 4) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
}*/
//Ejercicio2 contador
/*Cuando utilizamos bucles con contadores, debemos asegurarnos de que en algún momento 
alcancen la condición de parada del bucle. 
En el código anterior, el contador no tiene su valor alterado, 
y para resolver el bucle infinito, simplemente debes decrementarlo en cada iteración,
 agregando la línea 'contador--' dentro del bucle.

Al decrementar el valor de la variable contador en cada iteración, 
eventualmente será menor o igual a 0, lo que detendrá la ejecución del bucle. */
/*let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
}

let promedio = soma / qtdNumeros;

console.log(promedio);*/

//javascript
//let edad = prompt("Ingrese su edad:");

//if (edad >= 18) {
 // console.log("Eres mayor de edad.");
//} else {
  //console.log("Eres menor de edad.");
//}

//javascript
/*alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
   alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + intento);
}*/

//javaScript
//alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
/*let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
/*EJERCICIO BREAK
Utilizando un bucle while con la instrucción break cuando el cliente adivine el número.

let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}

Este código implementa correctamente un límite de 5 intentos y
 también utiliza la instrucción break cuando se adivina el número secreto.

//javaScript
/*La inclusión del bloque 'if' dentro del bloque 'else' garantiza que 
si la cantidad de millas es superior a 30000, el descuento será del 20%, 
y si no supera este valor pero es superior a 5000, el descuento será del 10%.
 En el caso de que la cantidad de millas sea inferior a 5000, el descuento permanecerá en cero,
 ya que no se cumple el requisito mínimo para obtener un descuento.*/
/*let porcentajeDescuento = 0;

if (cantidadDeMillas > 30000) {
    porcentajeDescuento = porcentajeDescuento + 20;
} else {
    if (cantidadDeMillas > 5000) {
        porcentajeDescuento = porcentajeDescuento + 10;
    }
}

/*PRIMER DESAFIO
alert('¡Bienvenida y bienvenido a nuestro sitio web!');
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert('¡Error! Completa todos los campos');
let mensajeDeError = '!Error! Completa todos los campos';
alert('¡valor de la variable mensajeDeError');
let nombreDelUsuario = prompt('Me indicas el nombre del Usuario');
console.log(nombreDelUsuario);
if (nombre == nombreDelUsuario) {
    alert('Acertaste el nombre');
}
let edadDelUsuario = prompt('Me indicas la edad del Usuario');
if (edad == edadDelUsuario) {
    alert('esa es tu edad?');
}
if (edad >= 18) {
    alert('¡Puedes obtener tu licencia de conducir!')
}*/

//segundo DESAFIO
/*1. Pregunta al usuario qué día de la semana es.Si la respuesta es
"Sábado" o "Domingo", muestra "¡Buen fin de semana!".
En caso contrario, muestra "¡Buena semana!".*/
/*alert('Bienvenido adivina dia de la semana');
let diaDeLaSemana = prompt('Que dia de la semana es?');
if (diaDeLaSemana === 'Sabado' || diaDeLaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}
/*2. Verifica si un número ingresado 
por el usuario es positivo o negativo.Muestra una alerta informativa.*/
/*alert('Bienvenido adivina numero positivo o negativo');
 let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}*/
/*3. Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100,
    muestra "¡Enhorabuena, has ganado!".
    En caso contrario, muestra "Inténtalo de nuevo para ganar."*/
/*alert('Bienvenido intenta puntuacion');
let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}*/
/*4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta,
    utilizando un template string para incluir el valor del saldo.*/
/*let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de $${saldoCuenta}.`);*/
/*5. Pide al usuario que ingrese su nombre usando prompt.
    Luego, muestra una alerta de bienvenida utilizando ese nombre.*/
/*let nombre = prompt('Por favor, ingresa tu nombre');
alert(`¡Bienvenido, ${nombre}!`);*/

/*DESAFIO 3
Crea un contador que comience en 1 y 
vaya hasta 10 usando un bucle 'while'. Muestra cada número.
/* let contador = 1;
while (contador <= 10) {
console.log(contador);
contador++;
}

Crea un contador que comience en 10 y
 vaya hasta 0 usando un bucle 'while'. Muestra cada número.
 let contador = 10;
while (contador >= 0) {
console.log(contador);
contador--;
}
Crea un programa de cuenta progresiva.
 Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.

let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");
while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}
Crea un programa de cuenta progresiva. Pide un número y 
cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
console.log(contador);
contador++
}" */
/*OPERADORES LOGICOS //AND
let idad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (idad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}
//OR
// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
  console.log("Tienes frutas!");
} else {
  console.log("No tienes frutas.");
}

*/
//DESAFIO 4
//Cree un programa que utilice console.log para mostrar un mensaje de bienvenida.
//console.log('Bienvenido');
//Crea una variable llamada "nombre" y dale tu nombre. Luego use console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
//let nombre = 'Leo';
//console.log(`¡Hola, ${nombre}!`);
//Crea una variable llamada "nombre" y dale tu nombre. Luego, use la alerta para mostrar el mensaje "¡Hola, [tu nombre]!".
//let nombre = 'Leo';
//alert(`¡Hola, ${nombre}!`);
//Utilice el mensaje y haga la siguiente pregunta: ¿Qué lenguaje de programación le gusta más? Luego almacene la respuesta en una variable y muéstrela en la consola del navegador.
//let lenguajePreferido = Prompt('¿Qué lenguaje de programación te gusta más?');
//console.log( lenguajePreferido);
//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, suma estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utilice console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]". en la consola.
/*let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;

console.log(`La suma de ${value1} y ${value2} es igual a ${resultado}.`)*/
/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, resta estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utilice console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]". en la consola.
let valor1 = 10;
let valor2 = 8;
let resultado = valor1 - valor2;

console.log(`La diferencia entre ${value1} y ${value2} es igual a ${resultado}.`);*/
//Pida al usuario que ingrese su edad cuando se le solicite. Según la edad ingresada, use un if para verificar si la persona es mayor o menor, mostrando un mensaje apropiado en la consola.
/*let edad = prompt('Digite su edad:');
if (edad> 17) {
    console.log('usted es mayor de edad.');
} else {
    console.log('usted es menor de edad.');
}*/
//Cree un "número" variable y solicite un valor y compruebe rápidamente si es positivo, negativo o cero. Utilice if-else para imprimir el mensaje respectivo.
/*var número = parseFloat(prompt("Ingrese un número:"));

if (número > 0) {
     console.log("El número es positivo.");
} else if (número < 0) {
     console.log("El número es negativo.");
} else {
     console.log("El número es cero.");
}
//Utilice un bucle while para imprimir los números del 1 al 10 en la consola.
let ​​número = 1;
while (número <= 10) {
     consol.log(número);
     número++;
}*/
//Cree una variable "calificación" y asígnele un valor numérico. Utilice if-else para determinar si la calificación es mayor o igual a 7 y muestre "Aprobado" o "Reprobado" en la consola.
/*let ​​nota = 8; // Reemplazar con el valor de la nota que deseas probar

if (nota >= 7) {
     console.log("Aprobado");
} else {
     console.log("Reprobado");
}*/
//Utilice Math.ramdon para generar cualquier número aleatorio y mostrar ese número en la consola.
/*let númeroAleatorio = Math.random();
console.log(númeroAleatorio);*/
//Utilice Math.ramdon para generar un número entero entre 1 y 10 y mostrar ese número en la consola.
//console.log(numeroInteiroAleatorio);
//Use o Math.ramdon para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
/*let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);*/