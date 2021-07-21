import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

function LandingPage({ pagina }) {
    return <div>
        <Link  to="/logIn"><button>Log In</button></Link>
        <Link  to="/signUp"><button>Sign Up</button></Link>
    </div>
}

export default LandingPage;