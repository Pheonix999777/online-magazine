import Clients from "./pages/Clients/Clients";
import Clothes from "./Pages/Clothes/Clothes";
import Faqs from "./Pages/Faqs/Faqs";
import Hero from "./Pages/Hero/Hero";
import Location from "./Pages/Location/Location";
import Product from "./Pages/Product/Product";

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
