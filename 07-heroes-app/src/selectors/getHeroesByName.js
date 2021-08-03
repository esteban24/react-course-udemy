import { heroes } from "../data/heroes";

export const getHeroesByName = ( value ) => {
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(value.toLowerCase()));
}