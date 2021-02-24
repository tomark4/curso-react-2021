
import heroes from '../data/heroes';
import {getHeroeById, getHeroeByOwner} from '../helpers/heroes'

describe('prueba en heroes files', () => {

  test('should return one heroe by id',() => {
    const id = 1;
    const heroe = getHeroeById(1);
    const data = heroes.find( h => h.id === id);
    expect(heroe).toEqual(data);
  });

  test('should undefined its not exists',() => {
    const heroe = getHeroeById(10);
    expect(heroe).toBe(undefined);
  });

  test('should return heroes dc', () => {
    const owner = 'DC';
    const data1 = getHeroeByOwner(owner);
    const data2 = heroes.filter( h => h.owner === owner);
    expect(data1).toEqual(data2);
  });

  test('should return heroes marvel', () => {
    const owner = 'Marvel';
    const data1 = getHeroeByOwner(owner);
    //const data2 = heroes.filter( h => h.owner === owner);
    expect(data1.length).toBe(2);
  });
});
