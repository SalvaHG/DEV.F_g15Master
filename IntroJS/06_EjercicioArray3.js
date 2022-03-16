// 1. Concatenar arreglos
var animals = ['eagle', 'parrot', ',monkey', 'boar', 'lion'];
var comingSoonAnimals =['panter', 'dragon', 'turtle' ];

var concatArray = animals.concat(comingSoonAnimals);
console.log(concatArray);

// 2. Acomodar arreglo mayor a menor
var arr = [4, 6, 1, 0, 8, 2];
arr.sort(function(a,b){return a - b;});
console.log(arr);

// 3. Agregar 'cow'
concatArray.push('cow');
console.log(concatArray);

// 4. Eliminar 'cow'
concatArray.pop();
console.log(concatArray);