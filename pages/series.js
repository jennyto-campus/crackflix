import SeriesList from "../Components/Series/SeriesList"
import styles from "../styles/series.module.css"

export default function SeriesPage() {

    return (
        <div className={styles.container}>
            <div>
                <SeriesList category={"tv"}/>
            </div>
        </div>
    )
}