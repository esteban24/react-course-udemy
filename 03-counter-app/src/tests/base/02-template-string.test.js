import { describe, expect, test } from '@jest/globals'
import { getSaludo } from '../../base/02-template-string'

describe('02-template-string.js test suite', () => {
    test("test method 'getSaludo(name)' should return 'Hola Fernando'", () => {
        //1. Given
        const name = 'Fernando';

        //2. When
        const greeting = getSaludo(name);

        //3. Then
        expect(greeting).toBe('Hola ' + name);
    })

    test("test method 'getSaludo()' should return 'Hola Carlos' as default param", () => {
        //1. Given
        //2. When
        const greeting = getSaludo();

        //3. Then
        expect(greeting).toBe('Hola Carlos');
    })
})
