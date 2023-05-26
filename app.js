//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

//ejercicio1
//soy un primer comentario
//alert("mensaje")


//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
//ejercicio2
//document.write("hello world");


//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
//ejercicio3
//document.write  (3+5);


//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
//ejercio4
//let person = prompt("por favor introduzca el nombre de usuario");
//document.write("hola " + person)


//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//ejercicio5
////let num1 = parseInt( prompt("por favor ingrese un numero"));
//let num2 = parseInt( prompt("por favor introduzca otro numero"));
//document.write(num1 + num2);


//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//ejercicio6
//let num1 = parseInt( prompt("ingrese un numero"));
//let num2 = parseInt( prompt("ingrese otro numero"));
//if (num1>num2) { 
//document.write(`el primer numero ${num1} es el mayor`);
//} else{
// document.write(`el segundo numero ${num2} es el mayor`)}


//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//ejercicio7
//let num1 = parseInt( prompt("ingrese un numero"));
//let num2 = parseInt( prompt("ingrese un segundo numero"));
//let num3 = parseInt( prompt("ingrese un tercer numero"));
//if (num1>num2)
//if (num1>num3) {
// document.write (`el numero ${num1} es el mayor`);
//} else {
//document.write (`el numero ${num3} es el mayor`);
//}
//else {
//if (num2>num3) {
//document.write (`el numero ${num2} es el mayor`);
//} else {
//document.write (`el numero ${num3} es el mayor`) 
//}


//8.- Escribe un programa que pida un número y diga si es divisible por 2
//ejercicio8
//let numero = parseInt (prompt ("ingrese un numero"));
//if (numero %2 === 0) {
//   document.write(`el numero ${numero} es divisible por 2`);
//} else{
//   document.write (`el numero ${numero} no es divisible por 2`);
//}


//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

//ejercicio9
//let frase = prompt("ingrese una frase").toLowerCase();
//let largo = frase.length;
//let vocales = "";
//let caracter;
//let i = 0
//while (i < largo) {
// caracter = frase (i, i+1);
// if ( caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u") {
//   vocales = vocales + caracter;
//}
//i= i+1;
//}//
//document.write(vocales);


//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es //por uno de los cuatro)
//ejercicio10
//let numero1 = parseInt(prompt("ingrese un numero"));
//if (numero1 % 2 == 0) {
//   document.write('el numero ${numero1} es divisible en 2 ');
//} else if (numero1 % 3 == 0) {
//   document.write('el numero ${numero1} es divisible en 3 ');
//} else if (numero1 % 5 == 0) {
//   document.write('el numero ${numero1} es divisible en 5 ');
//} else if (numero1 % 7 == 0) {
//  document.write('el numero ${numero1} es divisible en 7 ');
//} else {
//   document.write('el numero ${numero1} es no se puede dividir en 2, en 3, 5 o 7 ');
//}


//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es //divisible)
//ejercicio11
//let numero1 = parseInt(prompt("ingrese un numero"));
//if (numero1 % 2 == 0) {
//   document.write('el numero ${numero1} es divisible en 2 ');
//}
//if (numero1 % 3 == 0) {
//   document.write('el numero ${numero1} es divisible en 3 ');
//}
//if (numero1 % 5 == 0) {
//   document.write('el numero ${numero1} es divisible en 5 ');
//}
//if (numero21 % 7 == 0) {
//   document.write('el numero ${numero1} es divisible en 7 ');
//}
//if (numero1 % 2 != 0 & numero1 % 3 != 0 & numero1 % 5 != 0 & numero1 % 7 != 0) {
//   document.write('el numero ${numero1} es no se puede dividir en 2, en 3, 5 o 7 ');
//}