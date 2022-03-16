// Iterar arreglo con ciclo for e imprimir valores mayores a 3

var arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for(var i = 0; i <= arreglo.length; i++) {
    if(arreglo[i] > 3) {
        console.log(arreglo[i]);
    }
    else {
        console.log(arreglo[i] + " no es un número mayor a 3");
    };
}