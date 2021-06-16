const getPromiseImg = async() => {
    try {
        const apiKey = 'nAqC6xt31DPQhWt6WegJQ8Pr0gG5kgsi';
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data: { images :  { original :  { url } } } } = await response.json();
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
};

getPromiseImg();
