import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link, useHistory } from "react-router-dom";



function Navbar() {
 return (
    <div className={styles.Navbar}>
        <img src="/images/sinta-logo.png" />
        <div className={styles.LinkNavbar}>
            <Link to="/dashboard">Home</Link>
            <Link to="/bootcamp">Bootcamps</Link>
            <Link to="/jobs">Empregos</Link>
            
        </div>
        <div className={styles.LogOut}>
            <Link to="/">Log Out</Link>
        </div>
    </div>
 )
}

export default Navbar;