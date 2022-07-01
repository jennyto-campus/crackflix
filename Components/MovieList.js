import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./MovieList.module.css"
import MovieAPI from "../lib/api/Movies"
import MovieCard from "./MovieCard"


export default function MovieList(props) {
    
    const [items, setItems] = useState([])
    console.log(props.category)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const { keyword } = useParams()


    useEffect(() => {
        const getList = async () => {
            let response = null

            if(keyword === undefined) {
                const params = {}
                response = await MovieAPI.getMovieList("upcoming", {params})
            
            } 
        
            setItems(response.results)
            setTotalPage(response.total_pages)
        }
        getList()
    }, [])

    return (
        <div>
           {
                items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
           }
        </div>
    )
}