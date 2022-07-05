import { Link } from "react-router-dom";
import { w500Image } from "../lib/api";
import styles from "./MovieCard.module.css"
import { useRouter } from "next/router"

export default function MovieCard(props) {

    const router = useRouter()

    const item = props.item
    const link = '/' + "movie" + "/" + item.id

    const bg = w500Image(item.poster_path || item.backdrop_path)
    

    const handleClick = () => {
        //router.push(`/movie/${item.id}`)
        router.push(`/`+props.category+`/${item.id}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.movie_card} style={{ backgroundImage: `url(${bg})` }}>
                <button className={styles.btn} onClick={handleClick}>
                    <i className={styles.bx}>Details</i>
                </button>
            </div>
            <h3>{item.title || item.name}</h3>
        </div>
            
        
    )
}