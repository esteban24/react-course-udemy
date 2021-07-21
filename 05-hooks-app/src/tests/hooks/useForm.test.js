import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('useForm.js ', () => {
    const initialForm = {
        name: 'Esteban',
        email: 'esteban.martin@gmail.com'
    };

    test('should return default form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ values ] = result.current;
        expect(values).toEqual(initialForm);
    });

    test('should change name field', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ values, handleInputChange ] = result.current;

        const newName = { target: { name: 'name', value: 'Gael' } }

        act(() => { handleInputChange(newName); });

        const [ actualValues ] = result.current;

        expect(actualValues).toEqual({
            ...initialForm,
            name: newName.target.value
        });

    });

    test('should reset form when reset is called', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ values, handleInputChange, reset ] = result.current;
        const newName = { target: { name: 'name', value: 'Gael' } }

        act(() => { handleInputChange(newName); });

        let [ actualValues ] = result.current;

        expect(actualValues).toEqual({
            ...initialForm,
            name: newName.target.value
        });

        act(() => { reset(); });

        [ actualValues ] = result.current;

        expect(actualValues).toEqual(initialForm);
    });
})
