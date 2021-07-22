import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Jobs() {
    const [jobs, setJobs] = useState([])
    
    async function fetchJobs() {
        const res = await fetch('/api/jobs')
        const resBody = await res.json();
        setJobs(resBody.jobs)
    }
    useEffect(() => {
        fetchJobs()
    }, [])

    return ( 
    <>
        <h2>Jobs</h2>
        <div>
            {
                jobs.map(jobs => (
                    <div
                    key={jobs._id}
                >
                    <div>
                    <Link to={{ pathname: jobs.website }} target="_blank" >{jobs.name}</Link>
                    </div>
                    </div>
                ))
            }
        </div>
    </>
    )
}

export default Jobs;