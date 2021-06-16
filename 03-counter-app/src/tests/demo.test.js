import {describe, expect, test} from '@jest/globals'

describe('Demo test, writting my first tests with Jest :D', () => {
    test('Strings should be equal', () => {
        // 1. Given
        const givenMessage = "This is a normal string";
        const expectedMessage = `This is a normal string`;

        //2. When
        //3. Then
        expect(givenMessage).toBe(expectedMessage);
    })
})
