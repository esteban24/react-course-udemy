import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs')

describe('GifGrid.js test suite', () => {
    const category = "Jurassic Park";

    test('should match snapshot', () => {
        useFetchGifs.mockReturnValue({ data:[], loading: true });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when images are loaded', () => {
        useFetchGifs.mockReturnValue({ data:[{ id: "1234", title: "Triceracops", url: "https://triceracops.png" }], loading: false });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should not exist <p>Loading...</p>', () => {
        useFetchGifs.mockReturnValue({ data:[{ id: "1234", title: "Triceracops", url: "https://triceracops.png" }], loading: false });
        
        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper.find('p').exists()).toBe(false);
    })

    test('should have same number of <GifGridItem /> than gifs returned', () => {
        const gifs = [{ id: "1234", title: "Triceracops", url: "https://triceracops.png" }, { id: "ABS", title: "Triceracops", url: "https://triceracops.png" }];
        useFetchGifs.mockReturnValue({ data: gifs, loading: false });
        
        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})
