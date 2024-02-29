import styles from '../styles/Home.module.css';
import NavBar from "@/components/NavBar";

import {Rubik} from 'next/font/google';
const rubik = Rubik({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.section_container}>
        <section className={`${styles.infos} ${rubik.className}`}>
          <h1>About</h1>
          <p>$CHART is a token made to force you to look at the chart. The BuyBot will have no market cap in Telegram.
            The utility of the token is to learn how to buy and sell on your own conviction,
            without hype men or fudders in Telegram misleading you into false beliefs. Be a part of the movement. Watch the $CHART.
          </p>
        </section>
      </div>
      <div className={styles.section_container}>
        <section className={`${styles.infos} ${rubik.className}`}>
          <h1>Tokenomics</h1>
          <div className={styles.pill_container}>
            <div className={styles.pill}>
              <div className={styles.header}>
                Ticker
              </div>
              <div className={styles.detail}>
                $CHART
              </div>
            </div>
            <div className={styles.pill}>
              <div className={styles.header}>
                Tax
              </div>
              <div className={styles.detail}>
                0/0
              </div>
            </div>
            <div className={styles.pill}>
              <div className={styles.header}>
                Burn
              </div>
              <div className={styles.detail}>
                100%
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.section_container}>
        <section className={`${styles.infos} ${rubik.className}`}>
          <h1>Contract Address</h1>
          <p className={styles.ca}>
            2gNywbGr5hURypWAEk6UUXESx5cFmNrvajfbz81CEQzg
          </p>
        </section>
      </div>
      <div className={styles.section_container}>
        <section className={styles.charts}>
          <div id="dexscreener-embed">
            <iframe sandbox referrerPolicy={"no-referrer"} src="https://dexscreener.com/solana/2gNywbGr5hURypWAEk6UUXESx5cFmNrvajfbz81CEQzg?embed=1&amp;theme=dark"></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
