import LoginScreen from "../../../components/screens/LoginScreen";
import { mount } from 'enzyme';
import { AuthContext } from "../../../auth/AuthContextProvider";
import { types } from "../../../types/types";

describe('pruebas en login screen', () => {
  const context = {
    user: {
      logged: false,
    },
    dispatch: jest.fn()
  }

  const history ={
    replace: jest.fn()
  }

  const wrapper = mount(
    <AuthContext.Provider value={ context }>
      <LoginScreen history={history}/>
    </AuthContext.Provider>
  );

  test("debe de mostrarse correctamente", () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('debe de realizar el dispatch y la navegacion', () => {
    wrapper.find('.btn').prop('onClick')();

    expect(context.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
          name: 'jose'
      }
    })
    expect( context.dispatch ).toHaveBeenCalledTimes(1);
    expect( history.replace ).toHaveBeenCalledTimes(1)
  });


});
