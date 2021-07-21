import React, { useState } from 'react'
import {
    Link, useHistory
} from "react-router-dom";

function Home({ pagina }) {
    return <div >
        <Link  to="/requalificacao"><button>Requalificação</button></Link>
        <Link  to="/emprego"><button>Emprego</button></Link>
        <Link  to="/perfil"><button>Perfil</button></Link>
    </div>
}

export default Home