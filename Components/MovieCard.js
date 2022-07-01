import { Link } from "react-router-dom";
import { w500Image } from "../lib/api";
import styles from "./MovieCard.module.css"

export default function MovieCard(props) {

    const item = props.item
    const link = '/' + "movie" + "/" + item.id
    console.log(item.poster_path)
    const bg = w500Image(item.poster_path || item.backdrop_path)

    return (
        <div>
            <div className={styles.movie_card} style={{ backgroundImage: `url${bg}` }}>
                <button className={styles.btn}>
                    <i className={styles.bx}>test123</i>
                </button>
            </div>
            <h3>{item.title || item.name}</h3>
        </div>
            
        
    )
}