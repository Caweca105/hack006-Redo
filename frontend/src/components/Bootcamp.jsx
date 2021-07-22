import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import styles from '../styles/Bootcamp.module.css';

function Bootcamp() {
    const [bootcamp, setBootcamp] = useState([])
    
    async function fetchBootcamp() {
        console.log('fetch')
        const res = await fetch('/api/bootcamp')
        const resBody = await res.json();
        console.log(resBody)
        setBootcamp(resBody.bootcamp)
    }
    useEffect(() => {
        fetchBootcamp()
    }, [])

    return ( 
    <>
    <div>
    <Navbar />
    </div>
        <div className={styles.title}>
            <h2>Bootcamp</h2>
        </div>
        <div className={styles.todos}>
            {
                bootcamp.map(bootcamp => (
                    <div
                        key={bootcamp._id}
                    >
                    <div className={styles.imagemCenas}>
                    <a href={bootcamp.website} target="_blank">
                <img src={bootcamp.image}/></a>
                    </div>
                    </div>
                ))
            }
        </div>
    </>
    )
}

export default Bootcamp;