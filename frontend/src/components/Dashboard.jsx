import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import styles from '../styles/Dashboard.module.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <div className={styles.Container}>
        <div  className={styles.Profile}>
          <Link to="/profile">Profile</Link>
        </div>
        <div className={styles.ContainerMain}>
          <div className={styles.Main}>Conteudo</div>
        </div>
        <div className={styles.Content}>
          <div className={styles.Bootcamp}>
            <Link to="/bootcamp">Bootcamp</Link>
          </div>
          <div className={styles.Jobs}>
            <Link to="/jobs">Jobs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
