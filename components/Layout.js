import styles from '../styles/Home.module.css'
import Header from './Header';
import Nav from './Nav';

const Layout = ({children}) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1>My App</h1>
        <Header />
        {children}
      </div>
    </>
  )
}

export default Layout;