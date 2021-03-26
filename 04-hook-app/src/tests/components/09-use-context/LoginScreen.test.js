import { mount } from "enzyme";
import LoginScreen from "../../../components/09-use-context/LoginScreen";
import {UserContext} from "../../../components/09-use-context/UserContextProvider";

describe('Pruebas en en login screen component', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = mount(<UserContext.Provider value={{
      setUser: jest.fn(),
      user: {}
    }}>
      <LoginScreen />
    </UserContext.Provider>);

    expect(wrapper).toMatchSnapshot();
  })


  const setUser = jest.fn()
  const wrapper = mount(
    <UserContext.Provider value={{setUser}}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('should ejecutar el setUser con el argumento esperado', () => {
    wrapper.find('.btn-primary').simulate('click');
    expect(setUser).toHaveBeenCalledWith({id: 1, name:'jose',email:'jotta@jotta.com'})
  });

})
