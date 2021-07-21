import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('userCounter.js test suite', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(0);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    })

    test('should return counter = 100', () => {
        const { result } = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);
    })

    test('should increment in 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => { increment(); });

        const { counter } = result.current;

        expect(counter).toBe(101);

    })

    test('should decrement in 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => { decrement(); });

        const { counter } = result.current;

        expect(counter).toBe(99);
    })

    test('should reset', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;

        act(() => { decrement(); });

        let { counter } = result.current;

        expect(counter).toBe(99);

        act(() => { reset(); });

        counter = result.current.counter;

        expect(counter).toBe(100);
    })

})
