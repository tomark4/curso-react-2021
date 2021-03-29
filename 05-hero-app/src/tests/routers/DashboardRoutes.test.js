import { mount } from 'enzyme';
import { MemoryRouter } from "react-router";
import { AuthContext } from '../../auth/AuthContextProvider';
import DashboardRoutes from "../../routers/DashboardRoutes";

describe('Pruebas en dashboard routes component', () => {


  test('debe hacer match con el snapshot', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AuthContext.Provider value={{
          user: {logged: true, name:'jose'},
          dispatch: jest.fn()
        }}>
          <DashboardRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()

    expect( wrapper.find('.text-info').text().trim() ).toBe('Hola, jose')
  })

})
