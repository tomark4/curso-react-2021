import {mount} from 'enzyme'
import AppRouter from '../../routers/AppRouter'
import {AuthContext} from '../../auth/AuthContextProvider';

describe('prueba en el componente authrouter', () => {

  test('debe mostrar el login si no esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={{
        dispatch: jest.fn(),
        user:{
          logged: false
        }
      }} >
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot()
  });

  test('debe de mostrar el componente marvel si esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={{
        dispatch: jest.fn(),
        user:{
          name: 'jose',
          logged: true
        }
      }} >
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper.find('.navbar').exists() ).toBe(true);

  })


});
