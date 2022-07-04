import { useParams } from "react-router-dom"
import MovieList from "../Components/MovieList"
import styles from "../styles/movies.module.css"

export default function MoviesPage() {


    return (
        <div className={styles.container}>
            <div>
                <MovieList category={"movie"}/>
            </div>
        </div>
    )
}