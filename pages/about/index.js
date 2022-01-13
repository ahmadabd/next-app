import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function About() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Test page</title>
        <meta name='keywords' content='test' />
      </Head>
      <h1>About Page</h1>
    </div>
  )
}

  