
import heroes from '../data/heroes';
import {getHeroeById, getHeroeByIdAsync, getHeroeByOwner, getTodos} from '../helpers/heroes'

describe('prueba en heroes files', () => {

  test('should return one heroe by id',() => {
    const id = 1;
    const heroe = getHeroeById(id);
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


  test('should return heroe async promise', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then( hero => {
      expect( hero ).toBe( heroes[0] );
      done()
    })

  });


  test('should return error if hero not exists', (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch( err => {
      expect(err).toBe('No se encontro el heroe');
      done()
    })

  });


  test("should return data todos", async () => {

    const todos = await getTodos()
    expect(typeof todos).toEqual('object')
  });
});
