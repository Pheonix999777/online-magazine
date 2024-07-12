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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const LikeCarts = useSelector((state) => state.cart.item);
  const cart = useSelector((state) => state.add.item);

  const navbar = [
    { href: "/pages/NotFound", label: "О магазине" },
    { href: "/pages/NotFound", label: "Доставка и оплата" },
    { href: "/pages/NotFound", label: "Политика безопасности" },
    { href: "/pages/NotFound", label: "Условия соглашения" },
    { href: "/pages/NotFound", label: "Публичная оферта" },
    { href: "/pages/NotFound", label: "Наши гарантии" },
  ];

  const category = [
    { label: "мальчики" },
    { label: "девочки" },
    { label: "младенцы" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setIsInputVisible(!isInputVisible);
  };

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

        <div
          className={`header__bottom ${
            isSticky ? "header__bottom-sticky" : ""
          }`}
        >
          <a className="header__logo" href="/">
            Get it
          </a>
          <div className="header__content">
            {category.map((item, index) => (
              <div key={index} className="header__downMenu">
                <button className="header__downBtn">{item.label}</button>
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
                      <li className="header__menu-list">
                        <Link
                          className="header__menu-link"
                          href={"/pages/categories"}
                        >
                          обуви
                        </Link>
                      </li>
                      <li className="header__menu-list">
                        <Link
                          className="header__menu-link"
                          href={"/pages/categories"}
                        >
                          шапки
                        </Link>
                      </li>
                    </ul>

                    <ul className="header__menu-ul">
                      <li className="header__menu-list">
                        <Link
                          className="header__menu-link"
                          href={"/pages/categories"}
                        >
                          финки
                        </Link>
                      </li>
                      <li className="header__menu-list">
                        <Link
                          className="header__menu-link"
                          href={"/pages/categories"}
                        >
                          женщины
                        </Link>
                      </li>
                      <li className="header__menu-list">
                        <Link
                          className="header__menu-link"
                          href={"/pages/categories"}
                        >
                          куртки
                        </Link>
                      </li>
                      <li className="header__menu-list">
                        <Link
                          className="header__menu-link"
                          href={"/pages/categories"}
                        >
                          футболки
                        </Link>
                      </li>
                    </ul>

                    <ul className="header__menu-ul">
                      <li className="header__menu-list">
                        <Link
                          className="header__menu-link"
                          href={"/pages/categories"}
                        >
                          шорты
                        </Link>
                      </li>
                      <li className="header__menu-list">
                        <Link
                          className="header__menu-link"
                          href={"/pages/categories"}
                        >
                          свитеры
                        </Link>
                      </li>
                      <li className="header__menu-list">
                        <Link
                          className="header__menu-link"
                          href={"/pages/categories"}
                        >
                          аккесуары
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <Link href={"/pages/categories"} className="header__category">
              <CgMenuGridO style={{ marginRight: "2px" }} />
              все категории
            </Link>
          </div>

          <div className="header__bottom-right">
            <div
              className={
                isInputVisible
                  ? "header__actions-visible"
                  : "header__actions-container"
              }
            >
              <button className="header__actions" onClick={handleSearchClick}>
                <Search />
              </button>
              <div
                className={`header__input-container ${
                  isInputVisible ? "visible" : ""
                }`}
              >
                <input
                  type="text"
                  className="header__input"
                  placeholder="Название одежды"
                />
              </div>
            </div>

            <Link className="header__actions" href={"/pages/LikeCarts"}>
              <Heart />
              <span className="header__actions-number">{LikeCarts.length}</span>
            </Link>

            <Link className="header__actions" href={"/pages/NotFound"}>
              <Analiytics />
              <span className="header__actions-number">0</span>
            </Link>

            <Link className="header__actions" href={"/pages/bag"}>
              <Bag />
              <span className="header__actions-number">{cart.length}</span>
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
