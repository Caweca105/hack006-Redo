import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link, useHistory } from "react-router-dom";
import LinkNavbar from './LinkNavbar';


function Navbar() {
 return (
    <div className={styles.Navbar}>
        <img src="/images/sinta_logo.png" />
        <div>
        <Link  to="/bootcamp">Bootcamp</Link>
        <Link  to="/jobs">Jobs</Link>
        <Link  to="/profile">Profile</Link>
        </div>
    </div>
 )
}

export default Navbar;