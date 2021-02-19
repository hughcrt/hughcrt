import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hugh Chocart</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hugh Chocart</h1>

        <p className={styles.description}>
          Hi there! I'm a UI engineer consultant.
          <br />I founded{" "}
          <a href="https://neuron." target="_blank">
            neurON
          </a>
          , which I manage during my spare time.
          <br />
          Currently based in Seoul 🇰🇷
        </p>
      </main>

      <section className={styles.clients}>
        <h3>Some of my previous clients:</h3>

        <a href="https://getleda.com" target="_blank">
          <Image src="/img/leda.svg" alt="Leda logo" width="112" height="75" />
        </a>

        <a href="https://tricycle-environnement.fr" target="_blank">
          <Image
            src="/img/tricycle.png"
            alt="Tricycle Environnement logo"
            width="172"
            height="67"
          />
        </a>

        <a href="https://www.upaged.com" target="_blank">
          <Image
            src="/img/upaged.png"
            alt="Upaged logo"
            width="175"
            height="55"
          />
        </a>

        <a href="https://ec.europa.eu/info/index_en" target="_blank">
          <Image
            src="/img/european-commission.svg"
            alt="European Commission logo"
            width="250"
            height="75"
          />
        </a>
      </section>

      <footer className={styles.footer}>
        <a href="mailto:me@hugh.sh">me@hugh.sh</a>
      </footer>
    </div>
  );
}
