import { describe, expect, test } from '@jest/globals'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('05-funciones.js test suite', () => {
    test("test method 'getUser()' should return an object", () => {
        const object = getUser();
        const expectedObject = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        expect(object).toEqual(expectedObject);
    })

    test("test method 'getUsuarioActivo(name)' should return an object", () => {
        const name = 'Abe';
        const object = getUsuarioActivo(name);
        const expectedObject = {
            uid: 'ABC567',
            username: name
        };
        expect(object).toEqual(expectedObject);
    })
})
