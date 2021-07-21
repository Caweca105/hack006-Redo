import React from 'react'
import Navbar from './Navbar';
import styles from '../styles/Landingpage.module.css'


    function LandingPage({ pagina }) {
            return   <div className={styles.Landingpage}>
                     <Navbar/>
                    <img className={styles.img3} src="/images/landingpage.png"/>
                </div>
        };
        

        


export default LandingPage