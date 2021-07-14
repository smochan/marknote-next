import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import queryString from 'query-string'
import {OAuth2Client} from 'google-auth-library' 



export default function Home() {
  const router = useRouter()
  const query = router.query
  const token = ""
  const CLIENT_ID = "120135436671-sbqei1khck23d092616gduue1s2i2rds.apps.googleusercontent.com"
  useEffect(() => {
    fetch(`https://intense-tundra-92368.herokuapp.com/auth/google/callback?${queryString.stringify(query)}` )
    .then( res => res.json())
    .then(data => {token = data.jwt } )
  })


  const client = new OAuth2Client(CLIENT_ID);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  console.log(payload);
  // const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);


  return (
    <div className={styles.container}>
      <Head>
        <title>Marknote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>Marknote</h1>
        <p>Login successful</p>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}




// use router krke.......
// use useEffect
// 