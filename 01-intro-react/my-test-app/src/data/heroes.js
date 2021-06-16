const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const getHeroes = () => heroes;

const getHeroById = (id) => heroes.find(element => element.id === id);

const getHeroesByOwner = (owner) => heroes.filter(element => element.owner === owner);

// export { getHeroes, getHeroById, getHeroesByOwner };
// export default heroes;

export {
    heroes as default,
    getHeroes,
    getHeroById,
    getHeroesByOwner
};