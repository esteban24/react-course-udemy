import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test, beforeEach } from '@jest/globals';
import { shallow } from 'enzyme';

import CounterApp from '../../components/CounterApp';

describe('CounterApp.js test suite', () => {
    let counterApp = shallow(<CounterApp />);

    beforeEach( () => {
        counterApp = shallow(<CounterApp />);
    });

    test('should match <CounterApp /> snapshot', () => {
        expect(counterApp).toMatchSnapshot();
    });

    test('should return default value = 100', () => {
        const defaultValue = 100;
        const counterApp = shallow(<CounterApp value={ defaultValue }/>);

        const actualValue = counterApp.find('h2').text().trim();
        expect(Number.parseInt(actualValue)).toBe(defaultValue);
    });

    test('should increment with button +', () => {
        const plusButton = counterApp.find('button').at(0);

        plusButton.simulate('click');
        const actualValue = counterApp.find('h2').text().trim();

        expect(actualValue).toBe("11");
    });

    test('should decrement with button -', () => {
        const plusButton = counterApp.find('button').at(1);

        plusButton.simulate('click');
        const actualValue = counterApp.find('h2').text().trim();

        expect(actualValue).toBe("9");
    });

    test('should reset value to default with button reset', () => {
        const defaultValue = 105;
        const counterApp = shallow(<CounterApp value={ defaultValue }/>);

        // Increment to change value and then check if value is incremented
        const plusButton = counterApp.find('button').at(0);
        plusButton.simulate('click');
        expect(counterApp.find('h2').text().trim()).toBe("106");

        // Check if reset actually works
        const resetButton = counterApp.find('button').at(2);
        resetButton.simulate('click');
        expect(counterApp.find('h2').text().trim()).toBe("105");
    })

});
