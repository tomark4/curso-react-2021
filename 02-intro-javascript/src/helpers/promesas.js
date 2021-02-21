import {HEROES} from '../data/heroes'

const getHeroeById = (id) => HEROES.find( (heroe) => heroe.id === id)

export const fetchFakeApi = (id) => {
  return new Promise( async (resolve, reject) => {
    try{
      setTimeout(() => {
        const heroe = getHeroeById(id);
        if(heroe){
          resolve(heroe);
        }
        reject("No se encontro el heroe");
      },1000);
    } catch(err){
      reject(err);
    }
  })
}

export const funcionAsync = async () => {
    return 'hello world';
}
