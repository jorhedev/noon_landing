import styles from './HomePage.module.css'
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Content from '../Content/Content';

const HomePage = () => {
     
    return(
        <div className={styles.container}> 
        <Navbar/>
        <Header/>
        <Content/>

        </div>
    )
}


export default HomePage;