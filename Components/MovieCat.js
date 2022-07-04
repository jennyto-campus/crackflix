import PropTypes from "prop-types"
import MovieAPI from "../lib/api/Movies"
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { w500Image } from "../lib/api"

export default function MovieCat(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null
            const params = { page: 1 }
            if (props.type !== 'similar') {
                response = await MovieAPI.getMovieList(props.type, params)
            } else {
                response = await MovieAPI.getSimilar(props.id)
            }

            setItems(response.results)
        }
        getList()

        
    }, [])



    return (
        <div>
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {
                    items.map((item, i) => {
                        {console.log(item.poster_path)}
                        <SwiperSlide key={i}>
                            <img src={w500Image(items[i].poster_path)} alt=""/>
                        </SwiperSlide>
                        
                       
                    })
                    
                }
                
            </Swiper>
            
        </div>
    )
}

MovieCat.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

