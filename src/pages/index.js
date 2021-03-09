import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SocialProofSection from "../components/SocialProofSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hugh Chocart</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hugh Chocart</h1>

        <p className={styles.description}>
          I'm a software engineer consultant.
          <br />I founded{" "}
          <a href="https://neuron.hugh.sh" target="_blank">
            neurON
          </a>
          , which I manage during my spare time.
          <br />
          Currently based in Seoul 🇰🇷
        </p>
      </main>
      <SocialProofSection />

      <footer className={styles.footer}>
        <div></div>
        <a href="mailto:me@hugh.sh">me@hugh.sh</a>
        <a className="github" href="https://github.com/hughcrt" target="_blank">
          <Image
            src="/img/github.svg"
            alt="Github Logo"
            width={30}
            height={30}
          />
        </a>
      </footer>
    </div>
  );
}
