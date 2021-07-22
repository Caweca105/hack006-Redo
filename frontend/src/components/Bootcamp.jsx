import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Bootcamp() {
    const [bootcamp, setBootcamp] = useState([])
    
    async function fetchBootcamp() {
        const res = await fetch('/api/botcamp')
        const resBody = await res.json();
        setBootcamp(resBody.bootcamp)
    }
    useEffect(() => {
        fetchBootcamp()
    }, [])

    return ( 
    <>
        <h2>Bootcamp</h2>
        <div>
            {
                Bootcamp.map(bootcamp => (
                    <div
                    key={bootcamp._id}
                >
                    <div>
                    <Link to={{ pathname: bootcamp.website }} target="_blank" >{bootcamp.name}</Link>
                    </div>
                    </div>
                ))
            }
        </div>
    </>
    )
}

export default Bootcamp;