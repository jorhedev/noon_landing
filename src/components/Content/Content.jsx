import styles from "./Content.module.css";
import vector3 from '../../assets/Vector3.png'
import vector from '../../assets/Vector.png'
import vector2 from '../../assets/Vector2.png'
import vector5 from '../../assets/Vector5.png'
import vector6 from '../../assets/Vector6.png'
import vector4 from '../../assets/Vector 4.png'





const Content = () => {
    return(
        <div className={styles.containerBox}>
            <div className={styles.boxPrincipal}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <div className={styles.contentBox}>
                        <img src={vector3} alt="" />
                        <p>AI trained to generate realistic 3D objects</p>
                        <button className={styles.boton}><img src={vector} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className={styles.boxTwo}>
                <div className={styles.contentTwo}>
                    <div className={styles.contentBoxTwo}>
                        <div className={styles.boxes}>
                        <div className={styles.imagen}>
                        <img src={vector2} alt="" />
                        </div>
                        <div className={styles.info}>
                        <h2>Style</h2>
                        <p>Choose your style</p>
                        </div>
                        </div>  

                        <div className={styles.boxes}>
                        <div className={styles.imagen}>
                        <img src={vector5} alt="" />
                        </div>
                        <div className={styles.info}>
                        <h2>Material</h2>
                        <p>Choose material</p>
                        </div>
                        </div>  

                        <div className={styles.boxes}>
                        <div className={styles.imagen}>
                        <img src={vector4} alt="" />
                        </div>
                        <div className={styles.info}>
                        <h2>Creativity</h2>
                        <p>High-level</p>
                        </div>
                        </div>  

                        <div className={styles.boxes}>
                        <div className={styles.imagen}>
                        <img src={vector6} alt="" />
                        </div>
                        <div className={styles.info}>
                        <h2>Al model</h2>
                        <p>Midjourney 5.0</p>
                        </div>
                        </div>  
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Content;
