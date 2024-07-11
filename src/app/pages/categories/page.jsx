"use client";
import Container from "@/app/Components/Container/Container";
import Img from "../../../../public/Imiges/image-removebg-preview (27) 1 (1).png";
import Img2 from "../../../../public/Imiges/image-removebg4.png";
import Img3 from "../../../../public/Imiges/image-removebg1.png";
import Img4 from "../../../../public/Imiges/image-removebg2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";
import Shopping from "../../../../public/icons/shoppingbag.svg";
import "./styles.scss";
import { useState } from "react";

export default function Categories() {
  const [openIndex, setOpenIndex] = useState(null);
  const [data, setData] = useState([
    { title: "Размеры", text: "не выбрана", label: "Price" },
    { title: "Цвет", text: "не выбрана", label: "Blue" },
    { title: "По ценам", text: "не выбрана", label: "Blue" },
    { title: "Сезонность", text: "не выбрана", label: "Blue" },
    { title: "Страна", text: "не выбрана", label: "Blue" },
  ]);

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

  const handleChange = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOptionClick = (index, label) => {
    const newData = data.map((item, i) =>
      i === index ? { ...item, text: label } : item
    );
    setData(newData);
    setOpenIndex(null);
  };

  return (
    <section className="category">
      <Container>
        <div className="category__flex">
          <div className="category__wrapper">
            {data.map((item, index) => (
              <div key={index} className="category__words">
                {item.title}:
                <span
                  onClick={() => handleChange(index)}
                  className="category__spn"
                >
                  {item.text}
                  <RiArrowDownSLine
                    style={{
                      marginRight: "5px",
                      color: "#333",
                      marginLeft: "5px",
                    }}
                  />
                </span>
                {openIndex === index && (
                  <ul className="category__selected">
                    <li className="category__option">
                      <button
                        onClick={() => handleOptionClick(index, item.label)}
                        className="category__option-btn"
                      >
                        {item.label}
                      </button>
                    </li>
                    <li className="category__option">
                      <button
                        onClick={() => handleOptionClick(index, item.label)}
                        className="category__option-btn"
                      >
                        {item.label}
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="category__flex-box">
            <div className="category__words">
              Страна:
              <span className="category__span">По возрастанию цен</span>
              <RiArrowDownSLine style={{ fill: "#297EFF" }} />
            </div>
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
                    className="category__box-img"
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
                      className="category__box-img"
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
