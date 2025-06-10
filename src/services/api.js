  

const API_KEY = '10f8240d4decff452b5edb425b303a97'
const BASE_URL = 'http://api.themoviedb.org/3'


export const getPopularMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_keys =${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch (`${BASE_URL}/search/movie?api_key=${API_KEY}&query =${encodeURIComponent(
    query
    )}`
    );
    const data = await response.json()
    return data.results
};