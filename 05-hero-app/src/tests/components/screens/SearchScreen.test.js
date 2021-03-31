import {mount} from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import SearchScreen from '../../../components/screens/SearchScreen';

describe('pruebas en el search screen component', () => {

  test('debe de mostrarse correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('.alert-danger').text().trim()).toBe('No hay data');
  });

  test('debe de mostrar a batman y el input con el valor del query string', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('input').prop('value')).toBe('batman');
  });

  test('debe de mostrar si no se encuentrar el hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=jose']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay data');
    expect(wrapper.find('.alert-danger').exists()).toBe(true);
  });

  test('debe de llamar el push de history', () => {
    const history = {
      push: jest.fn()
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search"
        component={() => <SearchScreen history={history} />}/>
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change',{
      target:{
        name: 'search',
        value:'batman'
      }
    })

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect( history.push ).toHaveBeenCalledWith('?q=batman');
  });

});
