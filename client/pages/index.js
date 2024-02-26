import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <a href="https://t.me/chartcommunitysol" target="_blank">Telegram</a>
        <img src="/chart2.png" alt="" id={styles.charting}/>
        <a href="https://twitter.com/CHART_ON_SOLANA" target="_blank">Twitter</a>
      </div>
      <main className={styles.main}>
        <section className={styles.infos}>
          <h1>Utility</h1>
          <p>$CHART is a token made to force you to look at the chart. The buybot will have no marketcap in Telegram.
            The utility of the token is for you to learn how to buy and sell on your own conviction,
            without hypemen or fudders in Telegram misleading you into false beliefs. Be a part of the movement. Watch the $CHART.
          </p>
        </section>
      </main>
    </div>
  );
}
