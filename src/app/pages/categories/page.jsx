"use client";
import Container from "@/app/Components/Container/Container";
import "./styles.scss";
import Img from "../../../../public/Imiges/image-removebg-preview (27) 1 (1).png";
import Img2 from "../../../../public/Imiges/image-removebg4.png";
import Img3 from "../../../../public/Imiges/image-removebg1.png";
import Img4 from "../../../../public/Imiges/image-removebg2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Categories() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const products = [
    {
      id: 1,
      img: Img,
      title: "Худи для мальчика с утеплителем Fellex®",
      price: "7 000 000 so’m",
      new: true,
    },
    {
      id: 2,
      img: Img2,
      title: "Куртка для девочки с утеплителем Fellex® ",
      price: "7 000 000 so’m",
      new: false,
    },
    {
      id: 3,
      img: Img3,
      title: "Блузка для девочки с утеплителем Fellex®",
      price: "7 000 000 so’m",
      new: true,
    },
    {
      id: 4,
      img: Img4,
      title: "Блузка для девочки с утеплителем Fellex®",
      price: "7 000 000 so’m",
      new: true,
    },
  ];

  return (
    <section className="category">
      <Container>
        <div className={`category__flex ${isSticky ? "category__sticky" : ""}`}>
          <div
            className={
              isSticky ? "category__wrapper--sticky" : "category__wrapper"
            }
          >
            <p className="category__words">
              Размеры:
              <span className="category__spn">не выбрана</span>
              <RiArrowDownSLine />
            </p>

            <p className="category__words">
              Цвет:
              <span className="category__spn">не выбрана</span>
              <RiArrowDownSLine />
            </p>

            <p className="category__words">
              По ценам:
              <span className="category__spn">не выбрана</span>
              <RiArrowDownSLine />
            </p>

            <p className="category__words">
              Сезонность:
              <span className="category__spn">не выбрана</span>
              <RiArrowDownSLine />
            </p>

            <p className="category__words">
              Сотировать по:
              <span className="category__spn">не выбрана</span>
              <RiArrowDownSLine />
            </p>
          </div>

          <div className="category__flex-box">
            <p className="category__words">
              Страна:
              <span className="category__span">По возрастанию цен</span>
              <RiArrowDownSLine style={{ fill: "#297EFF" }} />
            </p>
          </div>
        </div>
        <span className="category__select">
          Топ бестселлеров <MdOutlineKeyboardArrowRight />
        </span>
        <ul className="category__ul">
          {products.map((item, index) => (
            <li key={index} className="category__list">
              <Link
                className="category__link"
                href={`/pages/categories/${item.id}`}
              >
                <div className="category__box">
                  <Image
                    src={item.img}
                    alt="Блузка для девочки"
                    width={252}
                    height={252}
                  />
                </div>
                <span className="category__text">New</span>
                <h3 className="category__title">{item.title}</h3>
                <span className="category__price"> {item.price}</span>
              </Link>

              <button className="category__card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.3327 2.66659H12.666C13.0342 2.66659 13.3327 2.96506 13.3327 3.33325V12.6666C13.3327 13.0348 13.0342 13.3333 12.666 13.3333H8.50002V14.6666H12.666C13.7706 14.6666 14.666 13.7712 14.666 12.6666V3.33325C14.666 2.22868 13.7706 1.33325 12.666 1.33325H3.3327C2.22813 1.33325 1.3327 2.22868 1.3327 3.33325V8H2.66604V3.33325C2.66604 2.96506 2.96451 2.66659 3.3327 2.66659ZM11.3327 3.99992C11.3327 6.20906 9.84032 7.99992 7.99937 7.99992C6.15842 7.99992 4.66604 6.20906 4.66604 3.99992H5.99937C5.99937 5.71062 7.1121 6.66658 7.99937 6.66658C8.88664 6.66658 9.99937 5.71062 9.99937 3.99992H11.3327Z"
                    fill="#333333"
                  />
                  <path
                    d="M4 10V14M2 12L6 12"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                добавить в корзину
              </button>
            </li>
          ))}
        </ul>
        <div className="category__bottom">
          {" "}
          <span className="category__select">
            Новые колекции <MdOutlineKeyboardArrowRight />
          </span>
          <ul className="category__ul">
            {products.map((item, index) => (
              <li key={index} className="category__list">
                <Link
                  className="category__link"
                  href={`/pages/categories/${item.id}`}
                >
                  <div className="category__box">
                    <Image
                      src={item.img}
                      alt="Блузка для девочки"
                      width={252}
                      height={252}
                    />
                  </div>
                  <span className="category__text">New</span>
                  <h3 className="category__title">{item.title}</h3>
                  <span className="category__price"> {item.price}</span>
                </Link>

                <button className="category__card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.3327 2.66659H12.666C13.0342 2.66659 13.3327 2.96506 13.3327 3.33325V12.6666C13.3327 13.0348 13.0342 13.3333 12.666 13.3333H8.50002V14.6666H12.666C13.7706 14.6666 14.666 13.7712 14.666 12.6666V3.33325C14.666 2.22868 13.7706 1.33325 12.666 1.33325H3.3327C2.22813 1.33325 1.3327 2.22868 1.3327 3.33325V8H2.66604V3.33325C2.66604 2.96506 2.96451 2.66659 3.3327 2.66659ZM11.3327 3.99992C11.3327 6.20906 9.84032 7.99992 7.99937 7.99992C6.15842 7.99992 4.66604 6.20906 4.66604 3.99992H5.99937C5.99937 5.71062 7.1121 6.66658 7.99937 6.66658C8.88664 6.66658 9.99937 5.71062 9.99937 3.99992H11.3327Z"
                      fill="#333333"
                    />
                    <path
                      d="M4 10V14M2 12L6 12"
                      stroke="#333333"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  добавить в корзину
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
