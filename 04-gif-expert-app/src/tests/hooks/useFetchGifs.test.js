import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGifs.js test suite', () => {
    test('should return initial state', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;

        await waitForNextUpdate();


    });

    test('should return arrray of images and loading false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

});
