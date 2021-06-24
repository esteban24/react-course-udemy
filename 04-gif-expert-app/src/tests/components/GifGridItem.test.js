import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem.js test suite', () => {
    const title = "Sample Text";
    const url = "https://my.test.host/gif.gif";
    const wrapper = shallow(<GifGridItem url={ url } title={ title }/>);

    test('should match component snapshop', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should have a <p></p> and match title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('should have <img/> with src and alt properties', () => {
        const img = wrapper.find('img');

        expect(img.prop('alt')).toBe(title);
        expect(img.prop('src')).toBe(url);
    })

    test('should have card animate animate__fadeIn class', () => {
        const div = wrapper.find('div');
        
        expect(div.prop('className')).toBe("card animate__animated animate__fadeIn");
    })
})
