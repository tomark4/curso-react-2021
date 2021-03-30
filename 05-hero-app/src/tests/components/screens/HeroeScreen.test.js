import HeroeScreen from '../../../components/screens/HeroeScreen';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';

describe('pruebas en heroe screen', () => {


  test('debe de mostrarse correctamente', () => {
      const history = {
        length:10,
        push: jest.fn(),
        goBack: jest.fn()
      };

      const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
          <HeroeScreen history={history} />
        </MemoryRouter>
      );

      expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('debe de mostrar un heroe si el id existe', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
          <Route path="/heroe/:id" component={HeroeScreen} />
        </MemoryRouter>
      );

      expect(wrapper.find('h3').text().trim()).toBe('Spider Man');
      expect(wrapper.find('.row').exists()).toBe(true)
    });

    test('debe de regresar a la pantalla anterior con push', () => {

      const history = {
        length:1,
        push: jest.fn(),
        goBack: jest.fn()
      };

      const wrapper = mount(
        <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
          <Route path="/heroe/:id" component={ (props) =>  <HeroeScreen history={history}/> } />
        </MemoryRouter>
      );

      wrapper.find('button').prop('onClick')();
      expect( history.push ).toHaveBeenCalledWith("/");
      expect( history.goBack ).not.toHaveBeenCalled();
    });

    test('debe de regresar a la pantalla anterior go back', () => {

      const history = {
        length:10,
        push: jest.fn(),
        goBack: jest.fn()
      };

      const wrapper = mount(
        <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
          <Route path="/heroe/:id" component={ (props) =>  <HeroeScreen history={history}/> } />
        </MemoryRouter>
      );

      wrapper.find('button').prop('onClick')();
      expect( history.push ).not.toHaveBeenCalled();
      expect( history.goBack ).toHaveBeenCalledWith();
    });

    test('debe de llamar el redirect', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/heroe/jotta-quintero']}>
          <Route path="/heroe/:id" component={HeroeScreen} />
        </MemoryRouter>
      );
      expect(wrapper.find('Redirect').exists()).not.toBe(true);
    })


});
