import { useParams } from "react-router-dom"
import MovieList from "../Components/MovieList"
import styles from "../styles/movies.module.css"

export default function MoviesPage() {

    const {category} = useParams()

    return (
        <div className={styles.container}>
            <div>
                <MovieList category={category}/>
            </div>
        </div>
    )
}