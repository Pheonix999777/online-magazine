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
import Asd from "../../../../../public/icons/asd.svg";
import Shopping from "../../../../../public/icons/shoppingbag.svg";
import Zoom from "@/app/Components/ImageInnerZoom/ImageInnerZoom";

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

  const product = products.find((item) => item.id === parseInt(id, 10));

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
              <Zoom src={activeProduct.src} alt="Active product image" />
            ) : (
              <Zoom src={product.img.src} alt="Product image" />
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
                <Asd />
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
      </Container>
    </section>
  );
};

export default Detail;
