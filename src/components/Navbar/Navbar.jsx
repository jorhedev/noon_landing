import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import noon from '../../assets/noon.png'

const Navbar = () =>{
    return(
        <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.fBox}>
            <div className={styles.image}>
            <NavLink  to='/'> <img src={noon} alt="" /> </NavLink>
            </div>
            </div>
            <div className={styles.fBox}>
            <NavLink  to='/'><p>Pricing</p></NavLink>
            <NavLink  to='/'><p>Features</p></NavLink>
            <NavLink  to='/'><p>Open sources</p></NavLink>
            <NavLink  to='/'><p>Contact</p></NavLink>
            </div>
            <div className={styles.fBox}>
            <div className={styles.icon}>
                <NavLink  to='https://github.com/jorhedev' target="_blank">Sign In</NavLink>
            </div>
            </div>
        </div>

    </div>
    )
}

export default Navbar;