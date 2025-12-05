import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./inicio/Hero";
import YouLookingAt from "./inicio/YouLookingAt";
import Portfolio from "./inicio/Portfolio";
import Different from "./inicio/Different";
import About from "./inicio/About";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <YouLookingAt />
        <Portfolio />
        <Different />
        <About />
      </main>
    </div>
  );
}
