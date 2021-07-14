import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import queryString from 'query-string'



export default function Home() {

  const router = useRouter()
  const query = router.query
  useEffect(() => {
    fetch(`https://intense-tundra-92368.herokuapp.com/auth/google/callback?${queryString.stringify(query)}` )
    .then( res => res.json())
    .then(data => {console.log(data)} )
  }) 
  return (
    <div className={styles.container}>
      <Head>
        <title>Marknote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <a href="https://intense-tundra-92368.herokuapp.com/connect/google">
          <button>Login to Google</button>
        </a>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}


// use router krke.......
// use useEffect
// 