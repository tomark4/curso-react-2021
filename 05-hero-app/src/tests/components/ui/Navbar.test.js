import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { types } from '../../../types/types';
import Navbar from '../../../components/ui/Navbar';
import { AuthContext } from '../../../auth/AuthContextProvider';

describe('pruebas en el componente navbar', () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  };

  const context = {
    dispatch:jest.fn(),
    user: {
      logged: true,
      name: 'jose'
    }
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const wrapper = mount(
    <MemoryRouter>
      <AuthContext.Provider value={context}>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </AuthContext.Provider>
    </MemoryRouter>
  );

  test("debe de mostrase correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe("Hola, jose");
  });

  test('debe de llamar el logout y usar history', () => {
    wrapper.find('.btn').prop('onClick')();
    expect( context.dispatch ).toHaveBeenCalledWith({type: types.logout});
    expect( historyMock.replace ).toHaveBeenCalledWith('/login');
  });
});
