import { getGifs } from '../../helpers/getGifs';

describe('getGifs.js test suite', () => {
    test('should have 10 elements', async() => {
        const gifs = await getGifs('One Punch');
        
        expect(gifs.length).toBe(10);
    })

    test('should have 0 elements', async() => {
        const gifs = await getGifs('');
        
        expect(gifs.length).toBe(0);
    })
})
