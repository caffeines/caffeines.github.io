import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadat</title>
        <meta name="description" content="caffeines"/>
        <meta name="name" content="sadat"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.linkedin.com/in/sadatsayem/" target="_blank" rel="noreferrer">Sadat&apos;s </a> profile
        </h1>
        
      </main>
    </div>
  )
}
