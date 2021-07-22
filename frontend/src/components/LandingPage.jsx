import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Landingpage.module.css'




    function LandingPage({ pagina }) {
        return (
            <>
                <Navbar />
                <div className={styles.Landingpage}>
                    <img className={styles.img3} src="/images/landingpage.png"/>
                </div> 
            </>
        )  
};
        


export default LandingPage