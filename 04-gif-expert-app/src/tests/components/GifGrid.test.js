import { shallow } from "enzyme";
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid component', () => {

  test('should be match with snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [] ,
      loading: true
    })
    const wrapper = shallow( <GifGrid name="goku"/>)
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imagenes ', () => {
    const imgs = [
      {id: 'abc',url: 'http:/localhost/img.jpg',title: 'whatever'},
      {id: '123',url: 'http:/localhost/img.jpg',title: 'whatever'}
    ];

    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: false
    });

    const wrapper = shallow( <GifGrid name="goku"/>)

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe(imgs.length);
  });


});
