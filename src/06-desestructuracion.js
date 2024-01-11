//Desestructuración
//Asignación desestructurante

const persona = {
  nombre: 'Tonny',
  edad:45,
  clave:'Ironman',
};
//Extrae lo que estoy poniendo en las llaves del objeto
const {nombre, edad, clave} = persona;

//
//console.log(nombre);
//console.log(edad);
//console.log(clave);

//
//const retornaPersona = (usuario) => {
// const {edad, clave, nombre}  = usuario
//}
//
//const retornaPersona2 = ({clave,nombre, edad, rango = 'Capitan'}) => {
//// console.log(nombre,edad, rango);
//return{
//  nombreClave:clave,
//  anios:edad,
//}
//}


const obtenerDatosPersona = ({ clave, nombre, edad, rango = 'Capitan' }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng:{
      lat:14.1232,
      lng: -12.3232,
    }
  };
};

const { nombreClave, anios, latlng:{lat, lng} } = obtenerDatosPersona(persona);
console.log(nombreClave, anios );
console.log(lat, lng);



//retornaPersona(persona);
//retornaPersona2(persona);