import { heroes } from "../data/heroes"

export const getHeoresByName = (name) => {

  if(name === ''){
    return [];
  }

  return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name.toLowerCase() ))
}
