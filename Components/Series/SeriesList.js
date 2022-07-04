import SeriesAPI from "../../lib/api/Series"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./SeriesList.module.css"
import MovieCard from "../MovieCard"

export default function SeriesList(props) {

    const [items, setItems] = useState([])
    console.log(props.category)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const { keyword } = useParams()


    useEffect(() => {
        const getList = async () => {
            let response = null

            if (keyword === undefined) {
                const params = {}
                response = await SeriesAPI.getSeriesList("popular", { params })

            }


            setItems(response.results)
            setTotalPage(response.total_pages)
        }
        getList()
    }, [keyword])

    return (
        <div className={styles.container}>
            <div className={styles.series_grid}>
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)
                }
            </div>
        </div>
    )
}