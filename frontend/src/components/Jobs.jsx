import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'


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
    <div>
    <h2>Jobs</h2>
    </div>
        <div>
            {
                jobs.map(jobs => (
                    <div
                    key={jobs._id}
                >
                    <div>
                    <a href={{ pathname: jobs.website }} target="_blank" >{jobs.name}</a>
                    </div>
                    </div>
                ))
            }
        </div>
    </>
    )
}

export default Jobs;