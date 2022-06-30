import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MovieSlide from '../Components/MovieSlide'
import MovieAPI from '../lib/api/Movies'
import { useEffect, useState } from 'react'

export default function Home() {

  const [movies, setMovies] = useState([])

  /*
  useEffect(() => {
    const getPopular = async () => {
      const movies = await MovieAPI.readPopular()
      setMovies(movies)
      console.log(movies)
    }
    getPopular()
  },[]) */

  return (
    <div className={styles.container}>
      <Head>
        <title>Crackflix | Home</title>
      </Head>

      <main className={styles.main}>
        <MovieSlide/>
      </main>

    </div>
  )
}
