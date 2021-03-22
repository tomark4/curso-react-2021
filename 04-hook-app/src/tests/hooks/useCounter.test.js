import {renderHook, act } from '@testing-library/react-hooks'
import useCounter from '../../hooks/useCounter';

describe('Pruebas en use counter hook', () => {


  test('should return values by default', () => {
     const { result } = renderHook(() => useCounter(1000));

    //  console.log(result.current);

    //  expect(result.current.state).toBe(10);
    //  expect(typeof(result.current.increment)).toBe('function');
    //  expect(typeof(result.current.decrement)).toBe('function');
    //  expect(typeof(result.current.reset)).toBe('function');

    expect(result.current.state).toBe(1000)
  });

  test('should increment state in 1', () => {
    const initialValue = 100;

    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.increment();
    });

    expect(result.current.state).toBe(initialValue + 1);
  })

  test('should decrement state in 1', () => {
    const initialValue = 100;

    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.state).toBe(initialValue - 1);
  })

  test('should reset to initial value', () => {
    const initialValue = 100;

    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.reset();
    });

    expect(result.current.state).toBe(initialValue);
  })
});
