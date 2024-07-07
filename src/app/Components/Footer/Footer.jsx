import Link from "next/link";
import Container from "../Container/Container";
import "./styles.scss";
import { LuClock5 } from "react-icons/lu";
import { RiInstagramFill, RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__flex">
          <div className="footer__wrapper">
            <span className="footer__info">Информация</span>
            <ul className="footer__ul">
              <li className="footer__list">
                <Link className="footer__link" href={"#"}>
                  Акции
                </Link>
              </li>
              <li className="footer__list">
                <Link className="footer__link" href={"#"}>
                  О магазине
                </Link>
              </li>
              <li className="footer__list">
                <Link className="footer__link" href={"#"}>
                  Доставка и оплата
                </Link>
              </li>
              <li className="footer__list">
                <Link className="footer__link" href={"#"}>
                  Наши гарантии
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__wrapper">
            <span className="footer__info">Категории</span>
            <ul className="footer__ul">
              <li className="footer__list">
                <Link className="footer__link" href={"#"}>
                  Одежды для женщин
                </Link>
              </li>
              <li className="footer__list">
                <Link className="footer__link" href={"#"}>
                  Одежды для мальчиков
                </Link>
              </li>
              <li className="footer__list">
                <Link className="footer__link" href={"#"}>
                  Одежды для младенцев
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__wrapper">
            <span className="footer__info">Время работы</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                maxWidth: "220px",
                marginTop: "12px",
              }}
            >
              <LuClock5 style={{ marginRight: "10px" }} />{" "}
              <p className="footer__work">
                Мы работаем без выходных с 10:00 до 19:00
              </p>
            </div>
            <div className="footer__social">
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
          </div>

          <div className="footer__wrapper">
            <span className="footer__info">Наши контакты</span>
            <div className="footer__wrapper-box">
              <span className="footer__action">
                <IoLocationOutline style={{ marginRight: "10px" }} /> г.Ташкент,
                ул.Паркент
              </span>
              <a className="footer__action" href="tel: +998 00 000 00 00">
                <BsTelephone style={{ marginRight: "10px" }} />
                +998 00 000 00 00
                <RiArrowDownSLine style={{ marginLeft: "10px" }} />
              </a>

              <a className="footer__action" href="mailto:info@gmail.com">
                <MdOutlineMailOutline style={{ marginRight: "10px" }} />
                info@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__bottom-text">Политика безопасности</p>
          <p className="footer__bottom-text">Условия соглашения</p>
          <p className="footer__bottom-text">Публичная оферта</p>
        </div>
      </Container>
    </footer>
  );
}
