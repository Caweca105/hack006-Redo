import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link, useHistory } from "react-router-dom";
import LinkNavbar from './LinkNavbar';


function Navbar() {
 return (
    <div className={styles.Navbar}>
        <img src="/images/sinta_logo.png" />
        <Link to="/bootcamp">Bootcamps</Link>
        <Link to="/jobs">Empregos</Link>
        <Link to="/profile">Meu Perfil</Link>
    </div>
 )
}

export default Navbar;