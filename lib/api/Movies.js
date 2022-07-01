import { getJSON } from ".";
import { BASE_URL } from ".";
import { API_KEY } from ".";

const MovieAPI = {
    readPopular(params) {
        return getJSON(`${BASE_URL}movie/popular?api_key=${API_KEY}`, params)
    },

    getVideos( cate, id) {
        console.log(`${BASE_URL + cate}/${id}/videos?api_key=${API_KEY}`)
        return getJSON(`${BASE_URL + cate}/${id}/videos?api_key=${API_KEY}`)
        
    },

    getMovieList( type, params) {
        return getJSON(`${BASE_URL}movie/` + type+`?api_key=${API_KEY}`, params)
    }
}

export default MovieAPI