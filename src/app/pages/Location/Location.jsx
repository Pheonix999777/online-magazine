import Container from "@/app/Components/Container/Container";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import address from "../../../../public/Imiges/Ellipse 1104.png";
import { RiInstagramFill, RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import "./styles.scss";

export default function Location() {
  return (
    <section className="location">
      <Container>
        <div className="location__flex">
          <div className="location__box">
            <div className="location__wrapper">
              <span className="location__text">И конечно же,</span>
              <h4 className="location__title">
                Обращайтесь в магазин, мы поможем решить ситуацию в вашу пользу.
              </h4>
              <button className="location__btn">
                <FaAngleDoubleRight />
                открыть локацию
              </button>
              <span className="location__text">наши социальные медии:</span>

              <div className="location__social-icons">
                <a className="location__social-link" href="#">
                  <RiFacebookFill />
                </a>

                <a className="location__social-link" href="#">
                  <RiInstagramFill />
                </a>

                <a className="location__social-link" href="#">
                  <FaTwitter />
                </a>
              </div>

              <p className="location__order">
                Подпишитесь на e-mail рассылку и получите скидку на первый
                заказ!
              </p>

              <div className="location__email-box">
                <input
                  className="location__inp"
                  type="email"
                  name="email"
                  placeholder="Ваш email address"
                />
                <button className="location__arrow">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>

          <div className="location__address">
            <Image className="location__img" src={address} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}