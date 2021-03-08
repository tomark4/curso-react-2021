
import {useFetchGifs} from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hook useFecthGifs', () => {

  test('should be return initial state', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Goku' ) )
    const { data, loading } = result.current
    await waitForNextUpdate({timeout: 1500});
    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test('should be return array of images', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Goku' ) )
    await waitForNextUpdate({timeout: 1500});
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });

});
