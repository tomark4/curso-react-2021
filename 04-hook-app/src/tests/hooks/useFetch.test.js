import {renderHook} from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('pruebas en el custom hook use fetch', () => {

  test('should be return info by default', () => {
    const { result } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );

    const { data, loading, error } = result.current;

    expect(data.length).toBe(0)
    expect(loading).toBe(true)
    expect(error).toBe(null)

  });

  test('should be return info', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );

    await waitForNextUpdate({timeout: 5000});
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);

  });

  test('should be manage error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://reqres.in/apid/users?page=2`) );

    await waitForNextUpdate({timeout: 5000});
    const { data, loading, error } = result.current;

    expect(data.length).toBe(0);
    expect(loading).toBe(false);
    expect(error).toBe('no se pudo cargar la info');

  });



});
