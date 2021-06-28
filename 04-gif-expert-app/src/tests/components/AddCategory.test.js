import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('AddCategory.js test suite', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    })
    
    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change input form field', () => {
        const input = wrapper.find('input');

        input.simulate('change', { target: { value: 'Salu2' } });

        const actualValue = wrapper.find('input').prop('value');

        expect(actualValue).toBe('Salu2');
    })   
    
    test('should not post data onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should call setCategories and clean input', () => {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'Salu2' } });

        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(setCategories).toHaveBeenCalled();

        const actualValue = wrapper.find('input').prop('value');
        expect(actualValue).toBe('');    })
    
})
