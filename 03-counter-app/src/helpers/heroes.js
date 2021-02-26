import heroes from "../data/heroes";

export const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

export const getHeroeByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroeById(id);
      if (hero){
        resolve(hero);
      } else {
        reject('No se encontro el heroe')
      }
    },1500)
  })
}

export const getTodos = async () => {
  try{
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await resp.json();
    return data;
  } catch(err){
    return 'No hay data.';
  }
}
