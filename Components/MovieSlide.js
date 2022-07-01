import styles from "./MovieSlide.module.css"
import { useEffect, useRef, useState } from "react"
import MovieAPI from "../lib/api/Movies"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { originalImage } from "../lib/api"
import { useHistory } from "react-router-dom"
import { w500Image } from "../lib/api"


export default function MovieSlide() {

    SwiperCore.use([Autoplay])

    const [movieItems, setMovieItems] = useState([])


    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await MovieAPI.readPopular({ params });
                setMovieItems(response.results.slice(0, 4));
            } catch {
                console.log('error')
            }
        }
        getMovies()
        console.log(movieItems)
    }, []);


    return (
        <div className={styles.movieSlide}>
            <Swiper module={[Autoplay]} grabCursor={true} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 3000 }}>
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                //<img src={originalImage(item.backdrop_path)} className={styles.img}/>
                                <MovieSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
          
        </div>
    )
}

const MovieSlideItem = props => {
    let history = useHistory

    const item = props.item

    const background = originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    

    return (
        <div className={styles.movieSlide__item} style={{ backgroundImage: `url(${background})` }} >
            <div className={styles.movieSlide__item__content }>
                <div className={styles.movieSlide__item__info}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <div className={styles.overview}>{item.overview}</div>
                    <div className={styles.btns}>
                        <button className={styles.btnWtch} onClick={() => history.push('/movie/' + item.id)}>
                            Watch now
                        </button>
                        <button className={styles.btnTrl} onClick={console.log('trailer')}>
                            Watch Trailer
                        </button>
                    </div>
                </div>
                <div className={styles.movieSlide__item__poster}>
                    <img src={w500Image(item.poster_path)}/>
                </div>
            </div>
        </div>
    )
}

