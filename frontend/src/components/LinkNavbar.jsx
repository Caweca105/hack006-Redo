import React, { useState } from 'react'
import {
    Link, Router, useHistory
} from "react-router-dom";

function LinkNavbar({ pagina }) {
    return <div >
        
            <Link  to="/requalificacao"><button>Requalificação</button></Link>
            <Link  to="/emprego"><button>Emprego</button></Link>
            <Link  to="/perfil"><button>Perfil</button></Link>
        
        
    </div>
}

export default LinkNavbar