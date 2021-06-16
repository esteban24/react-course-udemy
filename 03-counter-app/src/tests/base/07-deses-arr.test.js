import { describe, expect, test } from '@jest/globals'
import { retornaArreglo } from '../../base/07-deses-arr';

describe('05-deses-arr.js test suite', () => {
    test("test method 'retornaArreglo()' should return an array", () => {
        const expectedLetters = 'ABC';
        const expectedNumbers = 123;
        const [ actualLetters, actualNumbers ] = retornaArreglo();

        expect(typeof actualLetters).toBe('string');
        expect(typeof actualNumbers).toBe('number');
        expect(retornaArreglo()).toEqual([ expectedLetters, expectedNumbers ]);
    })
})
