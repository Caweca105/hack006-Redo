import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link, useHistory } from "react-router-dom";
import LinkNavbar from './LinkNavbar';


function Navbar() {
 return (
    <div className={styles.Navbar}>
        <img src="/images/sinta_logo.png" />
        
    </div>
 )
}

export default Navbar;