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
          <div className={styles.ContentBootcamp}>
            <Link to="/bootcamp"><h2>Bootcamps</h2></Link> 
            <div className={styles.Bootcamp}>
              <div className={styles.card}>
                <img src="/images/lecapsule_js.png" />
                <div className={styles.container}>
                  <h4>Le capsule</h4>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/b4f_js.png" />
                <div className={styles.container}>
                  <h4>Bytes4Future</h4>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/ironhack_js.jpg" />
                <div className={styles.container}>
                  <h4>Ironhack</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ContentJobs}>
            <Link to="/jobs"><h2>Empregos</h2></Link>
            <div className={styles.Jobs}>
              <div className={styles.card}>
                <img src="/images/sapo_js.png" />
                <div className={styles.container}>
                  <h4>Sapo Empregos</h4>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/adecco_js.png" />
                <div className={styles.container}>
                  <h4>Adecco</h4>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/indeed_js.png" />
                <div className={styles.container}>
                  <h4>Indeed</h4>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
