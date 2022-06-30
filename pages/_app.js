import Layout from '../Components/Layout'
import 'swiper/swiper.min.css'
import '../styles/globals.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RoutesGenerator from '../config/Routes'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Router } from 'next/router'

function MyApp(  { Component, props } ) {
  return (

    /*
    <BrowserRouter>
      <Routes>
        <Route render={props => (
          <>
            <Header {...props} />
            <RoutesGenerator />
            <Footer />

          </>
        )} />
      </Routes>
      
    </BrowserRouter>
      */    
    
    <Layout>
        <Component {...props} />
    </Layout> 
          
  )

}

export default MyApp
