"use client";
import Container from "@/app/Components/Container/Container";
import Img from "../../../../../public/Imiges/image-removebg-preview (27) 1 (1).png";
import Img2 from "../../../../../public/Imiges/image-removebg4.png";
import Img3 from "../../../../../public/Imiges/image-removebg1.png";
import Img4 from "../../../../../public/Imiges/image-removebg2.png";
import { useParams } from "next/navigation";
import Image from "next/image";
import "./styles.scss";
import { RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import asd from "../../../../../public/icons/asd.svg";

const Detail = () => {
  const params = useParams();
  const { id } = params;

  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      id: 1,
      img: Img,
      title: "Худи для мальчика с утеплителем Fellex®",
      price: "7 000 000 so’m",
      change: Img,
      new: true,
    },
    {
      id: 2,
      img: Img2,
      title: "Куртка для девочки с утеплителем Fellex® ",
      price: "7 000 000 so’m",
      change: Img2,
      new: false,
    },
    {
      id: 3,
      img: Img3,
      title: "Блузка для девочки с утеплителем Fellex®",
      price: "7 000 000 so’m",
      change: Img3,
      new: true,
    },
    {
      id: 4,
      img: Img4,
      title: "Блузка для девочки с утеплителем Fellex®",
      price: "7 000 000 so’m",
      change: Img4,
      new: true,
    },
  ];

  const tabs = [
    { name: "Описание", content: " Вес ковра" },
    { name: "Наличие", content: " Высота ворса (мм.)" },
    { name: "Доставка и оплата", content: " Плотность по основе" },
  ];

  const [activeImage, setActiveImage] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);

  const product = products.find((item) => item.id === parseInt(id));

  const handleImageClick = (image) => {
    setActiveProduct(image);
    setActiveImage(true);
  };

  return (
    <section className="item">
      <Container>
        <div className="item__flex">
          <span className="item__line">
            Главная
            <RiArrowRightSLine
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
          </span>

          <span className="item__line">
            Детям
            <RiArrowRightSLine
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
          </span>

          <span className="item__line">
            Девочкам
            <RiArrowRightSLine
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
          </span>

          <span className="item__line">
            Платья
            <RiArrowRightSLine
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
          </span>

          <span className="item__line">Платье Rare Edition</span>
        </div>

        <div className="item__main">
          <div className="item__main-flex">
            {products.map((item, index) => (
              <div
                key={index}
                className="item__wrapper"
                onClick={() => handleImageClick(item.img)}
              >
                <Image src={item.img} alt={item.title} width={70} height={74} />
              </div>
            ))}
          </div>

          <div className="item__block">
            {activeImage ? (
              <Image
                src={activeProduct}
                alt="Selected Product"
                width={295}
                height={309}
              />
            ) : (
              <Image
                src={product.img}
                alt="Selected Product"
                width={295}
                height={309}
              />
            )}
          </div>

          <div className="item__block-right">
            <span className="item__spn">New</span>
            <h3 className="item__title">321 600 сум</h3>
            <del className="item__del">402 000 сум</del>

            <span className="item__block-text">Платье Rare Edition</span>

            <div className="item__block-number">
              <span className="item__number">2M / 56</span>
              <span className="item__number">3M / 62</span>
              <span className="item__number">6M / 68</span>
            </div>

            <div className="item__buttons">
              <button className="item__button">
                <Image src={asd} alt="" />
                добавить в корзину
              </button>
              <button className="item__button">купить в 1 клик</button>
            </div>

            <div className="item__div">
              <span className="item__div-flex">
                Состав{" "}
                <p style={{ marginLeft: "10px", marginRight: "10px" }}>
                  ...................
                </p>{" "}
                <p>100% полиэстер</p>{" "}
              </span>

              <span className="item__div-flex">
                Комплектация{" "}
                <p style={{ marginLeft: "10px", marginRight: "10px" }}>
                  ...................
                </p>{" "}
                <p>Платье с трусиками</p>{" "}
              </span>

              <span className="item__div-flex">
                Длина юбки
                <p style={{ marginLeft: "10px", marginRight: "10px" }}>
                  ...................
                </p>{" "}
                <p>платьямиди</p>{" "}
              </span>

              <span className="item__div-flex">
                Страна бренда{" "}
                <p style={{ marginLeft: "10px", marginRight: "10px" }}>
                  ...................
                </p>{" "}
                <p>США</p>{" "}
              </span>

              <span className="item__div-flex">
                Цвет{" "}
                <p style={{ marginLeft: "10px", marginRight: "10px" }}>
                  ...................
                </p>{" "}
                <p>розовый</p>{" "}
              </span>

              <span className="item__div-flex">
                Вид застежкимолния
                <p style={{ marginLeft: "10px", marginRight: "10px" }}>
                  ...................
                </p>{" "}
                <p>Молния</p>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="item__tabs">
          <div>
            <ul className="item__tabs-ul">
              {tabs.map((tab, index) => (
                <li
                  key={tab.name}
                  className={`item__tabs-list ${
                    activeTab === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="item__tabs-box">
            <div key={activeTab}>
              <p>{tabs[activeTab].content}</p>
            </div>
          </div>
        </div>

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
      </Container>
    </section>
  );
};

export default Detail;