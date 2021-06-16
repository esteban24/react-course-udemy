import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test } from '@jest/globals';
import { shallow } from 'enzyme';

// import { render } from '@testing-library/react'
import App from '../App';

describe('App.js test suite', () => {
    /**
     * Test without Enzyme, with extendeded-expect
     */
    // test('should show message "Hi, I\'m Goku"', () => {
    //     const greeting = "Hi, I\'m Goku";
    //     const { getByText } = render(<App greeting={ greeting }/>);
    //     expect(getByText(greeting)).toBeInTheDocument();
    // });

    test('should show <App /> properly', () => {
        const greeting = "Hi, I\'m Goku";
        const wrapper = shallow( <App greeting={ greeting }/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('should return defined subtittle', () => {
        const greeting = "Hi, I\'m Goku";
        const subtittle = "Super sayan level 3"
        const wrapper = shallow( <App greeting={ greeting } subtittle={ subtittle }/>);

        const paragraphTest = wrapper.find('p').text();

        expect(paragraphTest).toBe(subtittle);
    })


});
