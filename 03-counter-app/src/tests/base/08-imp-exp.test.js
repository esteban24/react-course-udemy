import { describe, expect, test } from '@jest/globals';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('08-imp-exp.js test suite', () => {
    test("test method 'getHeroeById()' which exist, should return a hero", () => {
        const id = 1;
        const actualHero = getHeroeById(id);
        const expectedHero = heroes.find( h => h.id === id )

        expect(actualHero).toEqual(expectedHero);
    })

    test("test method 'getHeroeById()' which NOT exist, should return 'undefined'", () => {
        const wrongId = 120;
        const object = getHeroeById(wrongId);

        expect(object).toBe(undefined);
    })

    test("test method 'getHeroesByOwner('DC')' should return an array", () => {
        const owner = 'DC';
        const expectedHeroes = heroes.filter( h => h.owner == owner );

        expect(getHeroesByOwner('DC')).toEqual(expectedHeroes);
    })

    test("test method 'getHeroesByOwner('Marvel')' should return an array with length == 2", () => {
        expect(getHeroesByOwner('Marvel').length).toBe(2);
    })


})