import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'



export default function Home() {

  const router = useRouter()
  const { id_token } = router.query
  useEffect(() => {
    fetch(`https://intense-tundra-92368.herokuapp.com/auth/google/callback?id_token=${id_token}` )
    .then( res => res.json())
    .then(data => {console.log(id_token, data)} )
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