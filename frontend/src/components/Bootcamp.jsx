import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

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
        <div>
            <h2>Bootcamp</h2>
        </div>
        <div>
            {
                bootcamp.map(bootcamp => (
                    <div
                        key={bootcamp._id}
                    >
                    <div>
                    <a href={{ pathname: bootcamp.website }} target="_blank" >{bootcamp.name}</a>
                    </div>
                    </div>
                ))
            }
        </div>
    </>
    )
}

export default Bootcamp;