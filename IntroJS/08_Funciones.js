// 1. Función de oración y buscador de palabra 

let buscarPalabra = (oracion, buscador) => {
    let index = oracion.indexOf(buscador);
    if (index < 0) {
        console.log('No se ha encontrado la palabra en la oración');
    }
    else {
        console.log('La palabra si esta en el buscador');
    };
};
buscarPalabra('Hola Mundo', 'Mundo');


// 2. Sumar arreglo

const numbers = [1, 2, 3, 4, 10, 11];
let sum = 0;
let sumArray = () => {
    for (let i = 0; i < numbers.length; i++) {
        sum  += numbers[i];
    }
    console.log(sum)
}
sumArray();


// 3. Verificar si es palindromo la palabra 

let word1 = 'madam';
let word2 = 'computadora';

let palindromo = (word) => {
    if(word == word.split('').reverse().join('')) {
        console.log('La palabra ' + word + ' si es un palindromo');
    }
    else {
        console.log('La palabra ' + word + ' no es un palindromo');
    };
}
palindromo(word1);
palindromo(word2);

// 4. Convertir de Celsius a Fahrenheit
let gradosCelsius = 0;
let gradosFahrenheit = 0;

let celsius = (Fahrenheit) => {
    let conversion = ( (Fahrenheit -32) / 1.8 );
    console.log(conversion);
}
let fahrenheit = (Celsius) => {
    let conversion = ( (Celsius * 1.8) + 32);
    console.log(conversion);
}

let respuesta = prompt("¿Quieres convertir a grados Celcius o a grados Fahrenheit?");

if (respuesta == "Celsius") {
    gradosFahrenheit = Number(prompt("Escribe los grados Fahrenheit que deseas convertir"));
    celsius(gradosFahrenheit);
}
else {
    gradosCelsius = Number(prompt("Escribe los grados Celsius que deseas convertir"));
    fahrenheit(gradosCelsius);
}