import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MovieSlide from '../Components/MovieSlide'
import MovieAPI from '../lib/api/Movies'
import { useEffect, useState } from 'react'

export default function Home() {

  const [movies, setMovies] = useState([])

  return (
    <div className={styles.container}>
      <Head>
        <title>Crackflix | Home</title>
      </Head>

      <main className={styles.main}>
        <MovieSlide/>
        <div className={styles.container}>
          <div></div>
        </div>
      </main>

    </div>
  )
}
