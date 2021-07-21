import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import styles from '../styles/Dashboard.module.css'

function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <div className={styles.Container}>
        <div className={styles.Profile}>
          Nome
        </div>
        <div className={styles.ContainerMain}>
          <div className={styles.Main}>Conteudo</div>
        </div>
        <div className={styles.Content}>
          <div className={styles.Bootcamp}>Escolas</div>
          <div className={styles.Jobs}>Empregos</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
