import { getJSON } from ".";
import { BASE_URL } from ".";
import { API_KEY } from ".";

const MovieAPI = {
    readPopular(params) {
        return getJSON(`${BASE_URL}movie/popular?api_key=${API_KEY}`, params)
    },

    getVideos( cate, id) {
        return getJSON(`${BASE_URL}`+ cate + '/'+ `${id}`+'/videos?api_key='+`${API_KEY}`)
        
    },

    getMovieList( type, params) {
        return getJSON(`${BASE_URL}movie/` + type+`?api_key=${API_KEY}`, params)
    },

    getSimilar( id) {
        return getJSON(`${BASE_URL}movie/`+ id+`/similar?api_key=${API_KEY}`, {params: {}})
    },

    getDetail (cate, id) {
        console.log(id)
        return getJSON(`${BASE_URL}`+cate+'/'+ id + `?api_key=${API_KEY}`)
    },

    getCredits (category, id) {
        return getJSON(`${BASE_URL}`+category+'/'+id+ `/credits?api_key=${API_KEY}`, {params: {}})
    }
}

export default MovieAPI