const saludar = function saludar(nombre){
  return `hola, ${nombre}`;
}

console.log(saludar('Goku'));
// Tarea 1
//1. Transformar a funcion flecha
//2. Tiene que retornar un objeto implicito
//3. Realizar pruebas


const getUsuarioActivo = (nombre) => (
  {
    uid:'ABC567',
    username: nombre
  })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);