//console.log("hola mundo")

//Arreglos
//push modifica el arreglo orginal
// ... usar el operador express para copiar o etraer los datos del arreglo

const arreglo = [1,2,3,4];
let arreglo2 = [...arreglo, 5];
// la funcion que se ejecuta dentro de un metodo se llama callback
const arreglo3 = arreglo2.map( function(numero){
  return numero*2;

});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);