import Head from 'next/head'
import Meta from '../../components/Meta'
import styles from '../../styles/Home.module.css'

export default function About() {

  return (
    <div className={styles.container}>
      <Meta title='About page' />
      <h1>About Page</h1>
    </div>
  )
}

  