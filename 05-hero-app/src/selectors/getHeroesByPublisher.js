import {heroes} from '../data/heroes'
export const getHeroesByPublisher = (publisher) => {

  const validPublisher = ['DC Comics', 'Marvel Comics'];

  if(!validPublisher.includes(publisher)){
    throw new Error("Publisher no encontrado");
  }

  return heroes.filter( hero => hero.publisher === publisher);
}
