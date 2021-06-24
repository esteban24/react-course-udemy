import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('AddCategory.js test suite', () => {
    const wrapper = shallow(<AddCategory setCategories={ () => console.log('set categories') }/>);
    
    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change input form field', () => {
        const input = wrapper.find('input');

        input.simulate('change', { target: { value: 'Salu2' } });

        const actualValue = wrapper.props('inputValue').children[0].props.value;

        expect(actualValue).toBe('Salu2');
    })    
})
