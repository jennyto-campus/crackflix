import Layout from '../Components/Layout'
import 'swiper/swiper.min.css'
import '../styles/globals.css'

function MyApp(  { Component, pageProps } ) {
  return (
  
    <Layout>
        <Component {...pageProps} />
    </Layout> 
          
  )

}

export default MyApp


