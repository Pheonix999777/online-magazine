"use client";
import Link from "next/link";
import Container from "../Container/Container";
import "./styles.scss";
import { CgMenuGridO } from "react-icons/cg";
import Search from "../../../../public/icons/search.svg";
import Heart from "../../../../public/icons/heart.svg";
import Analiytics from "../../../../public/icons/analiytics.svg";
import Bag from "../../../../public/icons/Bag.svg";
import User from "../../../../public/icons/user.svg";

export default function Header() {
  const navbar = [
    { href: "/about", label: "О магазине" },
    { href: "/delivery-payment", label: "Доставка и оплата" },
    { href: "/security-policy", label: "Политика безопасности" },
    { href: "/terms-agreement", label: "Условия соглашения" },
    { href: "/public-offer", label: "Публичная оферта" },
    { href: "/public-offer", label: "Наши гарантии" },
  ];

  const category = [
    { href: "/about", label: "мальчики" },
    { href: "/delivery-payment", label: "женщины" },
    { href: "/pages/categories", label: "младенцы" },
  ];

  return (
    <header className="header">
      <Container>
        <nav className="header__nav">
          <ul className="header__ul">
            {navbar.map((item, index) => (
              <li className="header__list" key={index}>
                <Link className="header__link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__bottom">
          <a className="header__logo" href="/">
            Get it
          </a>
          <div className="header__content">
            <button className="header__downBtn">мальчики</button>

            <button className="header__downBtn">девочки</button>

            <div className="header__downMenu">
              <button className="header__downBtn">младенцы</button>
              <div className="header__menu">
                <div className="header__megaMenu">
                  <ul className="header__menu-ul">
                    <li className="header__menu-list">
                      <Link
                        className="header__menu-link"
                        href={"/pages/categories"}
                      >
                        брюки
                      </Link>
                    </li>
                    <li className="header__menu-list">обуви</li>
                    <li className="header__menu-list">шапки</li>
                  </ul>

                  <ul className="header__menu-ul">
                    <li className="header__menu-list">финки</li>
                    <li className="header__menu-list">женщины</li>
                    <li className="header__menu-list">куртки</li>
                    <li className="header__menu-list">футболки</li>
                  </ul>

                  <ul className="header__menu-ul">
                    <li className="header__menu-list">шорты</li>
                    <li className="header__menu-list">свитеры</li>
                    <li className="header__menu-list">аккесуары</li>
                  </ul>
                </div>
              </div>
            </div>

            <button className="header__category">
              <CgMenuGridO style={{ marginRight: "2px" }} />
              все категории
            </button>
          </div>

          <div className="header__bottom-right">
            <button className="header__actions">
              <Search />
            </button>

            <Link className="header__actions" href={"#"}>
              <Heart />
              <span className="header__actions-number">0</span>
            </Link>

            <Link className="header__actions" href={"#"}>
              <Analiytics />
              <span className="header__actions-number">0</span>
            </Link>

            <Link className="header__actions" href={"#"}>
              <Bag />
              <span className="header__actions-number">0</span>
            </Link>

            <button className="header__login">
              <User style={{ marginRight: "2px", marginBottom: "2px" }} />
              Войти
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
