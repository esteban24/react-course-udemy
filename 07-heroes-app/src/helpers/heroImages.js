const heroImages = require.context('../assets/heroes', true);

export const getHeroImageById = (id) => {
    return heroImages(`./${id}.jpg`).default
}