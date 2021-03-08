import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Pruebas en GifExpertApp Component', () => {

  test('should be return component', () => {
    const wrapper = shallow( <GifExpertApp />)
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de mostrar 1 elemento en GifGrid al cargar', () => {
    const categories = [
      { id: 1, name: "Dragon ball" },
    ]

    const wrapper = shallow(<GifExpertApp /> )
    expect( wrapper ).toMatchSnapshot()

    expect( wrapper.find('GifGrid').length ).toBe(categories.length)
  })


});
