import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./MovieList.module.css"


export default function MovieList(props) {
    
    const [items, setItems] = useState([])

    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const { keyword } = useParams()


    useEffect(() => {
        
    })

    return (
        <div>
            MovieList
        </div>
    )
}