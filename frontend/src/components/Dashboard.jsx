import React, { useState, useEffect } from 'react';
import styles from '../styles/Dashboard.module.css'

function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Navbar}>
        <img src="/images/sinta_logo.png" />
      </div>
      <div className={styles.Container}>
      <div className={styles.Profile}></div>
      <div className={styles.Main}></div>
      <div className={styles.Content}>
        <div className={styles.Bootcamp}></div>
        <div className={styles.Jobs}></div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
