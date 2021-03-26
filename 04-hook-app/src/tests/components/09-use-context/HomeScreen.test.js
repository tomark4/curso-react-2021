import { shallow, mount } from "enzyme";
import HomeScreen from '../../../components/09-use-context/HomeScreen'
import UserContextProvider from "../../../components/09-use-context/UserContextProvider";
describe('Pruebas en home screen component', () => {
  const user = {
    name: 'jose',
    email: 'jotta@jotta.com'
  };

  test('should de mostrarse el componente correctamente', () => {
    const wrapper = mount(
      <UserContextProvider value={{user}}>
        <HomeScreen />
      </UserContextProvider>
    )

    expect(wrapper).toMatchSnapshot()
  })


});
