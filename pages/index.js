import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marknote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Link href="https://intense-tundra-92368.herokuapp.com/connect/google">
          <button>Login to Google</button>
        </Link>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
