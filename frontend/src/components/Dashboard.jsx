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
          <Link to="/profile">Perfil</Link>
        </div>
        <div className={styles.ContainerMain}>
          <div className={styles.Main}>Conteudo</div>
          <div className={styles.Support}>
            <form action="https://www.seg-social.pt/inicio" target="_blank">
              <input type="submit" value="Seg Social"  />
            </form>
            <form action="https://www.portaldasfinancas.gov.pt/at/html/index.html" target="_blank">
              <input type="submit" value="Portal das Finanças" />
            </form>
            <form action="https://iefponline.iefp.pt/IEFP/index2.jsp" target="_blank">portal das finanças
              <input type="submit" value="IEFP" />
            </form>
          </div>
        </div>
        <div className={styles.Content}>
          <div className={styles.Bootcamp}>
            <Link to="/bootcamp">Bootcamp</Link>
          </div>
          <div className={styles.Jobs}>
            <Link to="/jobs">Empregos</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
