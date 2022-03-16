// Ejercicio 1 -> Solciitar un nùmero y verificar si es divisible entre dos

var number = Number(prompt("Ingresa un nùmero"));

if (number % 2 == 0) {
    alert("Este número es divisible entre dos");
}
else {
    alert("Este número no es divisible entre dos");
}


// Ejercicio 2 -> Determinar si un número es par o inpar 

var number = Number(prompt("Ingresa un número para determinar si es par o inpar"))

if (number % 2 == 0) {
    alert("Este número es par :D");
}
else {
    alert("Este número es inpar :D");
};


// Ejercicio 3 -> Si el número es 1000 imprimir que gano un premio, si no, mostrar que no gano nada

var winNumber = 1000;
var userNumber = Number(prompt("Digita cualquier número al azar. Si coincide con el número ganador, ganarás un premio"));

if (winNumber == userNumber) {
    alert("¡FELICIDADES, has ganado un premio!");
}
else {
    alert("Lo sentimos, el número ganador era 1000, sigue intentando D:");
};


// Ejercicio 4 -> Solciitar dos números y compararlos para mostrar cual es menor

var number1 = Number(prompt("Digite un número"));
var number2 = Number(prompt("Digite otro número"));

if (number1 != number2) {
    if (number1 > number2) {
        alert("El número " + number1 + " es mayor al número " + number2);
    }
    else {
        alert("El número " + number1 + " es menor al número " + number2);
    }
}
else {
    alert("Ambos números son iguales")
}


// Ejercicio 5 -> Solciitar tres números y mostrar cual es el mayor

var number1 = Number(prompt("Digite un primer número"));
var number2 = Number(prompt("Digite un segundo número"));
var number3 = Number(prompt("Digite un tercer número"));


if (number1 == number2 || number1 == number3 || number2 == number3 || number1 == number2 == number3){
    alert("Hay números repetidos")
}

else {
    if (number1 > number2 && number1 > number3) {
        alert("El número " + number1 + " es mayor a todos los demás números")
    }
    else {
        if (number2 > number1 && number2 > number3) {
            alert("El número " + number2 + " es mayor a todos los demás números")
        }
        else {
            alert("El Número " + number3 + " es mayor a todos los demás números")
        }
    }
}