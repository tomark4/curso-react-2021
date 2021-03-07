import {getGifs} from '../../helpers/getGifs'

describe('Pruebas en el custom hooks de getGifs', () => {
  test('should devolver 10 elementos', async () => {
    // here the test
    jest.setTimeout(5000);
    const resp = await getGifs('goku');
    expect(resp.length).toEqual(10)
  })

  test('should return array len 0 cuando no mando la categoria', async () => {
    // here the test
    jest.setTimeout(5000);
    const resp = await getGifs('');
    expect(resp.length).toEqual(0)
  })

})
