import Clients from "../../src/app/pages/Clients/Clients";
import Clothes from "../../src/app/pages/Clothes/Clothes";
import Faqs from "../../src/app/pages/Faqs/Faqs";
import Hero from "../../src/app/pages/Hero/Hero";
import Location from "../../src/app/pages/Location/Location";
import Product from "./pages/Product/Product";

export default function Home() {
  return (
    <>
      <Hero />
      <Clothes />
      <Product />
      <Faqs />
      <Clients />
      <Location />
    </>
  );
}
