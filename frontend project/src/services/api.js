const API_KEY="f92224049f0775d86e3a733c3a69b0ab";
const BASE_URL="https://api.tmdb.org/3"

export const getPopularMovies = async ()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    const data = await response.json()
    return data.results
};

export const searchMovies = async (query)=>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    const data = await response.json()
    return data.results
};  