import Container from "@/app/Components/Container/Container";
import "./styles.scss";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Logo from "../../../../public/Imiges/image 221.png";
import Logo2 from "../../../../public/Imiges/image 220.png";
import Logo3 from "../../../../public/Imiges/image 219.png";
import Logo4 from "../../../../public/Imiges/image 217.png";
import Logo5 from "../../../../public/Imiges/image 216.png";
import Logo6 from "../../../../public/Imiges/image 215.png";
import Logo7 from "../../../../public/Imiges/image 214.png";
import Logo8 from "../../../../public/Imiges/image 212.png";
import { clients } from "@/app/utils/data";

export default function Clients() {
  const Logos = [
    {
      img: Logo,
    },
    {
      img: Logo2,
    },
    {
      img: Logo3,
    },
    {
      img: Logo4,
    },
    {
      img: Logo5,
    },
    {
      img: Logo6,
    },
    {
      img: Logo7,
    },
    {
      img: Logo8,
    },
  ];
  return (
    <section className="clients">
      <Container>
        <div className="clients__container">
          <span className="clients__title">Что говорят наши клиенты</span>
        </div>
        <div className="clients__main">
          <Marquee pauseOnClick>
            {clients.map((client, index) => (
              <div key={index} className="clients__wrapper">
                <p className="clients__text">{client.text}</p>
                <div className="clients__box">
                  <Image src={client.img} alt="Wade Warren" />
                  <div className="clients__content">
                    <span> {client.name}</span>
                    <p> {client.model}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="logo">
          <Marquee pauseOnClick direction="right">
            {Logos.map((item, index) => (
              <div className="logo__wrapper" key={index}>
                <Image
                  className="logo__img"
                  src={item.img}
                  alt="Logo"
                  width={127}
                  height={60}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
