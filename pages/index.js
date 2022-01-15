import Items from '../components/Items';
import styles from '../styles/Home.module.css'
import {server} from '../config';
import Meta from '../components/Meta';

export default function Home({articles}) {

  return (
    <>
      <Meta title='home' />
      <div className={styles.container}>
        <h1>Home page</h1>
        
        <Items articles={articles} />
      </div>
    </>
  )
}


export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`);
  const articles = await response.json(); 

  return {
    props: {
      articles
    }
  }
}



// export const getStaticProps = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await response.json(); 

//   return {
//     props: {
//       articles
//     }
//   }
// }   