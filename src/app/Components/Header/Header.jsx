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
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Menu from "../../../../public/icons/menu.svg";

export default function Header() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const LikeCarts = useSelector((state) => state.cart.item);
  const cart = useSelector((state) => state.add.item);

  const navbar = [
    { href: "/pages/error", label: "О магазине" },
    { href: "/pages/error", label: "Доставка и оплата" },
    { href: "/pages/error", label: "Политика безопасности" },
    { href: "/pages/error", label: "Условия соглашения" },
    { href: "/pages/error", label: "Публичная оферта" },
    { href: "/pages/error", label: "Наши гарантии" },
  ];

  const category = [
    { label: "мальчики" },
    { label: "девочки" },
    { label: "младенцы" },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleSearchClick = () => {
    setIsInputVisible(!isInputVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

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
      </Container>

      <div className={`header__bottom ${isSticky ? "sticky" : ""}`}>
        <Container>
          <div className="header__flex">
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
                <span className="header__full-text">все категории</span>
                <span className="header__short-text">все</span>
              </Link>
            </div>

            <div className="header__bottom-right">
              <div
                className={
                  isInputVisible
                    ? "header__actions-visible"
                    : "header__search-container"
                }
              >
                <button className="header__search" onClick={handleSearchClick}>
                  <Search />
                </button>

                <input
                  type="text"
                  className={`header__input ${isInputVisible ? "visible" : ""}`}
                  placeholder="Название одежды"
                />
              </div>

              <div className="header__actions-wrapper">
                <Link className="header__actions" href={"/pages/wishlist"}>
                  <Heart />
                  <span className="header__actions-number">
                    {LikeCarts.length}
                  </span>
                </Link>

                <Link className="header__actions" href={"/pages/error"}>
                  <Analiytics />
                  <span className="header__actions-number">0</span>
                </Link>

                <Link className="header__actions" href={"/pages/bag"}>
                  <Bag />
                  <span className="header__actions-number">{cart.length}</span>
                </Link>

                <button className="header__login">
                  <User />
                  Войти
                </button>
              </div>
            </div>

            <div className="header__mobile-flex">
              <a className="header__short-logo" href="/">
                Get it
              </a>
              <button className="header__mobile-btn">
                <Menu />
                <User />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
