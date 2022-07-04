import { useEffect, useState } from "react"
import MovieAPI from "../lib/api/Movies"
import { w500Image } from "../lib/api"
import styles from "./Credits.module.css"

export default function Credits(props) {

    const [credits, setCredits] = useState([])

    useEffect(()=> {
        const getCredits = async () => {
            const response = await MovieAPI.getCredits(props.category, props.id)
            setCredits(response.cast.slice(0,5))
        }
        getCredits()
    }, [ props.id])

    return(
        <div className={styles.credits}>
            {
                credits.map((item, i) => (
                    <div key={i} className={styles.credits_item}>
                        <div className={styles.credits_item_img} style={{backgroundImage: `url(${w500Image(item.profile_path)})`}}></div>
                        <p className={styles.credits_item_name}>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}