import { getJSON } from ".";
import { BASE_URL } from ".";
import { API_KEY } from ".";

const SeriesAPI = {
    
    getSeriesList( type, params) {
        return getJSON(`${BASE_URL}tv/` + type +`?api_key=${API_KEY}`, params)
    }

}

export default SeriesAPI