import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('HookApp.js test suite', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<HookApp/>);

        expect(wrapper).toMatchSnapshot();
    })
})
