import React from "react";
import { shallow } from "enzyme"

import GifExpertApp from '../../components/GifExpertApp';

describe('GifExpertApp.js test suite', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show a list of categories', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
