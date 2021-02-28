import {shallow} from 'enzyme'
import "@testing-library/jest-dom";
import CounterApp from '../components/CounterApp'

describe('Pruebas en el component Counter App', () => {
  let wrapper = shallow(<CounterApp numero={10}/>);

  beforeEach(() => {
    wrapper = shallow(<CounterApp numero={10}/>);
  });

  test('should render counter app component',() => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render texto component ', () =>{
    const texto = "Este es el numero inicial: 100";
    const wrapper = shallow(<CounterApp numero={100}/>)
    const textoWrapper = wrapper.find('h2').text();
    expect(texto).toBe(textoWrapper)
  })

  test('should increment number +1', () =>{
    wrapper.find('button').at(0).simulate('click');
    const textoWrapper = wrapper.find('p').text();
    expect(textoWrapper).toBe(`Voy por el 11`);
  })

  test('should decrement number -1', () =>{
    wrapper.find('button').at(1).simulate('click');
    const textoWrapper = wrapper.find('p').text();
    expect(textoWrapper).toBe(`Voy por el 9`);
  })

  test('should reset component to num by default',()=> {
    const wrapper = shallow(<CounterApp numero={100}/>)
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    const textoWrapper = wrapper.find('p').text();
    expect(textoWrapper).toBe('Voy por el 100');
  })
});
