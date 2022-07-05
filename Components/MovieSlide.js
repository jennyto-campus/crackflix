import styles from "./MovieSlide.module.css"
import { useEffect, useRef, useState } from "react"
import MovieAPI from "../lib/api/Movies"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { originalImage } from "../lib/api"
import { useHistory } from "react-router-dom"
import { w500Image } from "../lib/api"
import { useRouter } from "next/router"
import Modal, { ModalContent } from "./Modal"


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

            {
                movieItems.map((item, i) => <TrailerModal key={i}  item={item}/>)
            }
          
        </div>
    )
}

const MovieSlideItem = props => {
    const router = useRouter()

    const item = props.item

    const background = originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`)
        console.log(document.querySelector(`#modal_${item.id}`))
        console.log(modal)
        const videos = await MovieAPI.getVideos('movie', item.id)

        if(videos.results.length > 0) {
            const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key
            modal.querySelector('.Modal_modal_content__usGva > iframe').setAttribute('src', videoSrc)
        } else {
            modal.querySelector('.modal_content').innerHTML = 'No Trailer'
        }

        modal.classList.toggle('active')
    }

    

    return (
        <div className={styles.movieSlide__item} style={{ backgroundImage: `url(${background})` }} >
            <div className={styles.movieSlide__item__content }>
                <div className={styles.movieSlide__item__info}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <div className={styles.overview}>{item.overview}</div>
                    <div className={styles.btns}>
                        <button className={styles.btnWtch} onClick={() => router.push('/movie/' + item.id)}>
                            Watch now
                        </button>
                        <button className={styles.btnTrl} onClick={setModalActive}>
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

const TrailerModal = props => {

    const item = props.item
    const iframeRef = useRef(null)
    const onClose = () => iframeRef.current.setAttribute('src', '')

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose} className={styles.modal_content}>
                <iframe  ref={iframeRef} width="100%" height={"500px"} title="trailer" ></iframe>
            </ModalContent>
        </Modal>
    )

}

