import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Tester</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.header}>
        Movie Tester
      </h1>

     

     
    </div>
  )
}
