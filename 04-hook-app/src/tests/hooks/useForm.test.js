import {renderHook, act} from '@testing-library/react-hooks'
import useForm from '../../hooks/useForm';

describe('pruebas en el custom hook de use form', () => {

  const initialValues = {
    email: 'jotta@jotta.com',
    name: 'jose'
  }

  test('should be return un form by default', () => {
    const { result } = renderHook(() => useForm(initialValues))
    const [values, handelInputChange] = result.current

    expect(typeof handelInputChange).toBe('function')
    expect(values).toEqual(initialValues);
  });

  test('should be return value name of form', () => {
    const newName = 'pepe';

    const {result} = renderHook(() => useForm(initialValues));
    const [, handleInputChange] = result.current;

    const event = {
      target:{
        name:'name',
        value:newName
      }
    };

    act(() => {
      handleInputChange(event);
    });

    const [newValues] = result.current;

    expect(newValues.name).toBe(newName);
    expect(newValues).toEqual({...initialValues, name: newName})
  });

});
