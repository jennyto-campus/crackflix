import styles from "./MovieSlide.module.css"
import tmdbApi, {category, movieType} from "../pages/api/tmdbAPI"
import apiConfig from "../pages/api/apiConfig"
import { useEffect, useState } from "react"

export default function MovieSlide() {

    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 4));
            } catch {
                console.log('error')
            }
        }
        getMovies()
    }, []);

    return (
        <div className={styles.movieSlide}>
            MovieSlide         
        </div>
    )
}