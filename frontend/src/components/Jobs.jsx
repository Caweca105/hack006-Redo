import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import styles from '../styles/Bootcamp.module.css';


function Jobs() {
    const [jobs, setJobs] = useState([])
    
    async function fetchJobs() {
        console.log('fetch')
        const res = await fetch('/api/jobs')
        const resBody = await res.json();
        console.log(resBody)
        setJobs(resBody.jobs)
    }
    useEffect(() => {
        fetchJobs()
    }, [])

    return ( 
    <>
    <div>
    <Navbar />
    </div>
    <div className={styles.title}>
    <h2>Jobs</h2>
    </div>
        <div className={styles.todos}>
            {
                jobs.map(jobs => (
                    <div
                    key={jobs._id}
                >
                    <div lassName={styles.imagemCenas}>
            <a href={jobs.website} target="_blank">
                <img src={jobs.image}/></a>
                <div/>
            
                    </div>
                    </div>
                ))
            }
        </div>
    </>
    )
}

export default Jobs;