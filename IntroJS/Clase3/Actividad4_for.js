// Crear programa que solicite un número y verificar cuantos números desde 1 hasta ese número son multiplis de 5

var number = Number(prompt("Digite un número aleatorio y verifique cuantos multiplos de 5 tiene"));

var i = 1;
var count = 0;

for(var i = 1; i <= number; i++) {
    if(i % 5 == 0) {
        console.log("El número " + i + " es multiplo de 5");
        count++;
    };
}
console.log("Del 1 al " + number + " existen " + count + " multiplos de 5");