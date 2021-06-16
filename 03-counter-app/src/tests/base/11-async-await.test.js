import { describe, expect, test } from '@jest/globals';
import { getImagen } from '../../base/11-async-await'

describe('11-async-await.js test suite', () => {
    test("test method 'getImagen()', should return an url", async() => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });

    test("test method 'getImagen(apiKey)', should return an error", async() => {
        const exception = await getImagen('not_valid_api_key');
        expect(exception).toEqual(new Error('API key incorrect or service unavailable'));
    });
});
