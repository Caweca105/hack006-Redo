import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link, useHistory } from "react-router-dom";



function Navbar() {
 return (
    <div className={styles.Navbar}>
        <img src="/images/sinta_logo.png" />
        <div className={styles.LinkNavbar}>
            <Link to="/bootcamp">Bootcamps</Link>
            <Link to="/jobs">Empregos</Link>
            <Link to="/profile">Meu Perfil</Link>
            <Link to="/dashboard">Página Inicial</Link>
        </div>
        <div className={styles.LogOut}>
            <Link to="/">Log Out</Link>
        </div>
    </div>
 )
}

export default Navbar;