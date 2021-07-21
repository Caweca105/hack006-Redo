import React, { useState, useEffect } from 'react';
import styles from '../styles/Dashboard.module.css'

function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Navbar}>
        <img src="/images/sinta_logo.png" />
      </div>
      <div className={styles.Container}>
        <div className={styles.Profile}>
          Nome
        </div>
        <div className={styles.Main}>
          <div className={styles.Card}>Conteudo</div>
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
