import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher ${publisher} not in valid publishers list`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}