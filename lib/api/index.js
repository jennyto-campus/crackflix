function createFetchFunction(method) {
    return async (url, params, getFullResponse = false) => {
        const _params = {
            method,
            headers: {
                "content-type": "application/json"
            },
            ...params
        }

        if (_params.body !== undefined) {
            _params.body = JSON.stringify(_params.body)
        }

        if (_params.token !== undefined) {
            _params.headers["Authorization"] = `Bearer ${_params.token}`
        }

        const response = await fetch(url, _params)

        if (!response.ok) {
            const error = new Error("Request faild with status " + response.status)
            error.response = response
            throw error
        }

        if (getFullResponse) {
            return response
        }

        let data = await response.json()
        return data
    }
}

export const getJSON = createFetchFunction("GET")
export const putJSON = createFetchFunction("PUT")
export const deleteJSON = createFetchFunction("DELETE")
export const postJSON = createFetchFunction("POST")
export const BASE_URL = 'https://api.themoviedb.org/3/'
export const API_KEY = '0b1d3d4afbde94967a0fa888ba2438d0'
export const GET_BY_NAME = "https://functionsapp-crackflix.azurewebsites.net/api/GetbyName"
export const originalImage= (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`
export const w500Image  = (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`