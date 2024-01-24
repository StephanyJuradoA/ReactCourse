import heroes from '../src/data/heroes'
//{owners} exportaciones individuales
//console.log(heroes);

//const getHeroeById = (id) => {
//  return heroes.find((heroes)=> {
//    if(heroes.id === id){
//      return true;
//    }
//    else {
//      return false
//    }
//   });
//
//}

// Funcion simplificada
export const getHeroeById = (id) => {
  return heroes.find((heroes)=> heroes.id === id);

}
console.log(getHeroeById(2));

export const getHeroresByOwner = (owner) => {
  return heroes.filter((heroes)=> heroes.owner === owner);
}

console.log(getHeroresByOwner('DC'));
