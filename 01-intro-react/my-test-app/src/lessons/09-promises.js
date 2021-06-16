import { getHeroById } from '../data/heroes'

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('After 2 seconds');
//         const heroe = getHeroById(2);
//         resolve(heroe);
//     }, 2000)
// });

// promise.then((hero) => console.log('hero', hero));


// const promiseError = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('After 3 seconds');
//         reject('Hero not found');
//     }, 3000);
// });

// promiseError.catch((err) => console.warn(err));

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        let element = getHeroById(id);
        element ? resolve(element) : reject({ status: 404, message: `Hero with id: ${id} not found` });
    });
};

getHeroByIdAsync(1)
    .then(hero => console.log(hero))
    .catch(error => console.warn(error));

getHeroByIdAsync(12)
    .then(console.log)
    .catch(console.warn);