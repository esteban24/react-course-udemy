import { describe, expect, test } from '@jest/globals';
import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes';

describe('09-promesas.js test suite', () => {
    test("test method 'getHeroeByIdAsync(id)' which exist, should return a hero", ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect(heroe).toEqual(heroes.find( h => h.id === id));
                done();
            });
    })

    test("test method 'getHeroeByIdAsync(id)' which NOT exist, should return an exception", ( done ) => {
        const id = 120;
        getHeroeByIdAsync(id)
            .catch( error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    })

})

