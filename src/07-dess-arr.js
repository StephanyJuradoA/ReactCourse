const personajes = ['Goku', 'Vegeta', 'Trunks'];
// Los espacios vacios indican que se estan ignorando los elementos iniciales
 const [, ,p3] = personajes;
 console.log(p3);

 const retornaArreglo = () =>{
  return['ABC', 123];
 }

 const[letras, numeros] = retornaArreglo();
 console.log(letras,numeros);

 //Tarea

 const estados = (valor) => {
  return [valor, ()=>{ console.log('Hola Mundo')}];
 }

 const [nombre, setNombre] = estados('Goku');
setNombre();
console.log(nombre);
// imprmir en consola la primera posisicon del arreglo
// el segundo se llamara setNombre