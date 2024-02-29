import { useEffect, useState } from 'react';
import styles from '../styles/NavBar.module.css';

import {Rubik} from 'next/font/google';
const rubik = Rubik({
  weight: '400',
  subsets: ['latin']
});

export default function NavBar(props) {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container}`}>
        <a href="#" className={styles.logo}>
          <img src="/logo-circle.svg" alt="Watch the Chart Logo"/>
        </a>
        <div className={`${styles.nav_links} ${rubik.className}`}>
          <div className={`${styles.nav_item} ${styles.icon}`}>
            <a href="https://twitter.com/CHART_ON_SOLANA">
              <img src="/twitter.svg" alt="Watch the Chart - Twitter"/>
            </a>
          </div>
          <div className={`${styles.nav_item} ${styles.icon}`}>
            <a href="https://t.me/chartcommunitysol">
              <img src="/telegram.svg" alt="Watch the Chart - Telegram"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}