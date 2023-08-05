import styles from './Header.module.css'
import { IoIosArrowForward } from 'react-icons/io';



const Header = () =>{
    return(
        <div className={styles.box}>
            <h1>Make it</h1>
            <span className={styles.typingText} id="typing-text">awesome.</span>
            <p>Al trained to generate realistic 3D objects.</p>
            <button>Get started <IoIosArrowForward/> </button>
        </div>
    )
}

export default Header;