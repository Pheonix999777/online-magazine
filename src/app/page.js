import Clents from "./Modules/Clients/Clients";
import Clothes from "./Modules/Clothes/Clothes";
import Faqs from "./Modules/Faqs/Faqs";
import Hero from "./Modules/Hero/Hero";
import Location from "./Modules/Location/Location";
import Product from "./Modules/Product/Product";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Clothes />
      <Product />
      <Faqs />
      <Clents />
      <Location />
    </main>
  );
}
