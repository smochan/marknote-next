import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Login</title>
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

