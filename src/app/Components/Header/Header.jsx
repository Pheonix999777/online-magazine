"use client";
import Link from "next/link";
import Container from "../Container/Container";
import "./styles.scss";
import { CgMenuGridO } from "react-icons/cg";

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
            Women & Kids
          </a>
          <div className="header__content">
            <span className="header__content-link">мальчики</span>

            <span className="header__content-link">девочки</span>

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.8688 15.4575C19.3126 12.319 19.0918 7.77838 16.2067 4.89319C13.0825 1.769 8.01714 1.769 4.89295 4.89319C1.76876 8.01739 1.76876 13.0827 4.89295 16.2069C7.77813 19.0921 12.3188 19.3128 15.4573 16.8691C15.4708 16.8844 15.4849 16.8994 15.4996 16.914L19.7422 21.1567C20.1327 21.5472 20.7659 21.5472 21.1564 21.1567C21.5469 20.7661 21.5469 20.133 21.1564 19.7424L16.9138 15.4998C16.8991 15.4852 16.8841 15.4711 16.8688 15.4575ZM14.7924 6.30741C17.1356 8.65055 17.1356 12.4495 14.7924 14.7927C12.4493 17.1358 8.65031 17.1358 6.30716 14.7927C3.96402 12.4495 3.96402 8.65055 6.30716 6.30741C8.65031 3.96426 12.4493 3.96426 14.7924 6.30741Z"
                  fill="#333333"
                />
              </svg>
            </button>

            <Link className="header__actions" href={"#"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0123 5.57169L10.9253 4.48469C8.7774 2.33681 5.29499 2.33681 3.14711 4.48469C0.999223 6.63258 0.999223 10.115 3.14711 12.2629L11.9859 21.1017L11.9877 21.0999L12.0141 21.1262L20.8529 12.2874C23.0008 10.1395 23.0008 6.65711 20.8529 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0123 5.57169ZM11.9877 18.2715L16.924 13.3352L18.3748 11.9342L18.3762 11.9356L19.4387 10.8732C20.8055 9.50635 20.8055 7.29028 19.4387 5.92344C18.0719 4.55661 15.8558 4.55661 14.4889 5.92344L12.0134 8.39904L12.0061 8.3918L12.005 8.39287L9.51107 5.89891C8.14423 4.53207 5.92815 4.53207 4.56132 5.89891C3.19449 7.26574 3.19449 9.48182 4.56132 10.8487L7.10075 13.3881L7.10254 13.3863L11.9877 18.2715Z"
                  fill="#333333"
                />
              </svg>
              <span className="header__actions-number">0</span>
            </Link>

            <Link className="header__actions" href={"#"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.00006 22.0005C4.73484 22.0005 4.48049 21.8951 4.29295 21.7076C4.10542 21.5201 4.00006 21.2657 4.00006 21.0005V13.0005C4.00006 12.7353 4.10542 12.4809 4.29295 12.2934C4.48049 12.1058 4.73484 12.0005 5.00006 12.0005C5.26528 12.0005 5.51963 12.1058 5.70717 12.2934C5.8947 12.4809 6.00006 12.7353 6.00006 13.0005V21.0005C6.00006 21.2657 5.8947 21.5201 5.70717 21.7076C5.51963 21.8951 5.26528 22.0005 5.00006 22.0005ZM10.0001 22.0005C9.73484 22.0005 9.48049 21.8951 9.29295 21.7076C9.10542 21.5201 9.00006 21.2657 9.00006 21.0005V3.00049C9.00006 2.73527 9.10542 2.48092 9.29295 2.29338C9.48049 2.10585 9.73484 2.00049 10.0001 2.00049C10.2653 2.00049 10.5196 2.10585 10.7072 2.29338C10.8947 2.48092 11.0001 2.73527 11.0001 3.00049V21.0005C11.0001 21.2657 10.8947 21.5201 10.7072 21.7076C10.5196 21.8951 10.2653 22.0005 10.0001 22.0005ZM15.0001 22.0005C14.7348 22.0005 14.4805 21.8951 14.293 21.7076C14.1054 21.5201 14.0001 21.2657 14.0001 21.0005V9.00049C14.0001 8.73527 14.1054 8.48092 14.293 8.29338C14.4805 8.10585 14.7348 8.00049 15.0001 8.00049C15.2653 8.00049 15.5196 8.10585 15.7072 8.29338C15.8947 8.48092 16.0001 8.73527 16.0001 9.00049V21.0005C16.0001 21.2657 15.8947 21.5201 15.7072 21.7076C15.5196 21.8951 15.2653 22.0005 15.0001 22.0005ZM20.0001 22.0005C19.7348 22.0005 19.4805 21.8951 19.293 21.7076C19.1054 21.5201 19.0001 21.2657 19.0001 21.0005V17.0005C19.0001 16.7353 19.1054 16.4809 19.293 16.2934C19.4805 16.1058 19.7348 16.0005 20.0001 16.0005C20.2653 16.0005 20.5196 16.1058 20.7072 16.2934C20.8947 16.4809 21.0001 16.7353 21.0001 17.0005V21.0005C21.0001 21.2657 20.8947 21.5201 20.7072 21.7076C20.5196 21.8951 20.2653 22.0005 20.0001 22.0005Z"
                  fill="#333333"
                />
              </svg>
              <span className="header__actions-number">0</span>
            </Link>

            <Link className="header__actions" href={"#"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 4H5C4.44772 4 4 4.44771 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4ZM22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM12 12C14.7614 12 17 9.31371 17 6H15C15 8.56606 13.3309 10 12 10C10.6691 10 9 8.56606 9 6H7C7 9.31371 9.23858 12 12 12Z"
                  fill="#333333"
                />
              </svg>
              <span className="header__actions-number">0</span>
            </Link>

            <button className="header__login">
              <svg
                style={{ marginRight: "2px", marginBottom: "2px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.33335 4.66667C5.33335 6.13943 6.52726 7.33333 8.00002 7.33333C9.47278 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.47278 2 8.00002 2C6.52726 2 5.33335 3.19391 5.33335 4.66667ZM6.66669 4.66667C6.66669 5.40305 7.26364 6 8.00002 6C8.7364 6 9.33335 5.40305 9.33335 4.66667C9.33335 3.93029 8.7364 3.33333 8.00002 3.33333C7.26364 3.33333 6.66669 3.93029 6.66669 4.66667Z"
                  fill="#FF5C00"
                />
                <path
                  d="M4.66669 10C4.66669 9.63181 4.96516 9.33333 5.33335 9.33333H10.6667C11.0349 9.33333 11.3334 9.63181 11.3334 10V14H12.6667V10C12.6667 8.89543 11.7713 8 10.6667 8H5.33335C4.22878 8 3.33335 8.89543 3.33335 10V14H4.66669V10Z"
                  fill="#FF5C00"
                />
              </svg>
              Войти
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
