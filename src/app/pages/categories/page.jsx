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
import Shopping from "../../../../public/icons/shoppingbag.svg";

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
                <Shopping />
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
                  <Shopping />
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
