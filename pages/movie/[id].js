import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import MovieAPI from "../../lib/api/Movies"
import { originalImage } from "../../lib/api"
import styles from './[id].module.css'
import { useParams } from "react-router-dom"
import Credits from "../../Components/Credits"
 
export default function DetailMovie(  {item}  ) {

    console.log(item)


    return (
        <div className={styles.container}>
            <div style={{backgroundImage: `url(${originalImage(item.backdrop_path)})`}} className={styles.bg} ></div>
            <div className={styles.cont}>
                <div className={styles.poster}>
                    <div style={{backgroundImage: `url(${originalImage(item.poster_path)})`}} className={styles.poster_img}  ></div>
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <div className={styles.genres}>
                        {
                            item.genres.slice(0,5).map((genre, i) => (
                                <span className={styles.genres_item} key={i}>{genre.name}</span>
                            ))
                        }
                    </div>
                    <p className={styles.overview}>{item.overview}</p>
                    <div className={styles.actors}>
                        <div className={styles.section}>
                            <button >rate</button>
                            <h2>Credits</h2>
                        </div>
                        <Credits id={item.id} category={"movie"}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export async function getStaticProps(context) {
    const item = await MovieAPI.getDetail("movie", context.params.id)
    return {
        props: { item }
    }
}

export async function getStaticPaths() {
    const items = []
    const params = {}
    const response = await MovieAPI.getMovieList('upcoming' , {params})
    items.push(response)
    const paths = items.map(item => (
        {
            params: {id: String(item.id)}
        }
    ))
    return {paths, fallback: true}
}



