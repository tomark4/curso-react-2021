import GifGridItem from '../../components/GifGridItem';
import {shallow} from 'enzyme';

describe('Pruebas en GifGridItem', () => {
  const url = 'http://localhost/hola.jpg';
  const title = 'hola mundo';
  const wrapper = shallow( <GifGridItem url={url} title={title}/>);

  test('should show component correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe( title );
  });

  test('should tener la url de imagen igual a las props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should tener la clase animate__bounce', () => {
    const div = wrapper.find('.card')
    expect(div.hasClass('animate__bounce')).toBe(true);
  });

});

