import { getJSON } from ".";
import { BASE_URL } from ".";
import { API_KEY } from ".";

const MovieAPI = {
    readPopular(params) {
        return getJSON(`${BASE_URL}movie/popular?api_key=${API_KEY}`, params)
    }
}

export default MovieAPI