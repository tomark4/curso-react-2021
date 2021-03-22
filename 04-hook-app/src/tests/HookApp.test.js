
import {shallow} from 'enzyme';
import HookApp from '../HookApp'

describe('Pruebas en hook app', () => {
  test('debe de retornar el componente', () => {
    let wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
})
