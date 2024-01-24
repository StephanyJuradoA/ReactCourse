// Promesas en react
// Las promesas  son ascincronas, las promesas caen en una pila de trabajo, primero se ejecuta lo sincrino
//resolve : call back se ejecuta uando la promesa es exitosa
//reject : cuando la promesa falla o no se puede cumplir

import { getHeroeById } from "./08-impo-exp";


const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //Tarea
    //Importar getHeroeById
    const p1 = getHeroeById(2);
    //console.log(heroe);
    resolve(p1);
  }, 2000)
});

promesa.then((heroe)=>(
  console.log('Heroe', heroe)
))
.catch (err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {

      const p1 = getHeroeById(id);
      if(p1){
        resolve(p1);
      }
      else{
        reject('No se pudo encontrar el heroe');
      }



    }, 2000)
  });
}

getHeroeByIdAsync(4)
.then(console.log)
.catch(console.warn);