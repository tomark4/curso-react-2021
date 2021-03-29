import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PrivateRoute from '../../routers/PrivateRoute';

describe('Pruebas en private route component', () => {

  const rest = {
    location: {
      pathname: '/marvel'
    }
  };

  Storage.prototype.setItem = jest.fn();

  test('debe de mostrar componente si esta autenticado y guardar localstorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute isAuth={true}
        component={ () => <span>Hola mundo</span> }
        {...rest}/>
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/marvel');

  });

  test('debe de bloquear el componente si no esta auth', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute isAuth={false}
        component={ () => <span>Hola mundo</span> }
        {...rest}/>
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
  })


});

