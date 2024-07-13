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
import { useEffect, useState } from "react";
import Link from "next/link";
import Asd from "../../../../../public/icons/asd.svg";
import Shopping from "../../../../../public/icons/shoppingbag.svg";
import Zoom from "@/app/Components/ImageInnerZoom/ImageInnerZoom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/Slices/Add.Slices";
import { addCart } from "@/app/store/Slices/Cart.Slices";
import Heart from "../../../../../public/icons/heart.svg";

const Detail = () => {
  const params = useParams();
  const { id } = params;

  const [activeTab, setActiveTab] = useState(0);

  const [active, setActive] = useState();

  const [scroll, setScroll] = useState(false);

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

  const numbers = [
    {
      num: "2M / 56",
    },
    {
      num: "3M / 62",
    },
    {
      num: "6M / 68",
    },
  ];

  const tabs = [
    {
      name: "Описание",
      content: " Вес ковра",
      text: "Высота ворса (мм.)",
      label: "Плотность по основе",
      word: "Плотность по утку",
      new: "плотность ворса",
    },
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

  const handleClick = (index) => {
    setActive(index);
  };

  const dispatch = useDispatch();

  const handleAddLike = (productId) => {
    dispatch(
      addToCart({
        productId,
        quantity: 1,
      })
    );
  };

  const handleAddCart = (productId) => {
    dispatch(
      addCart({
        productId,
        quantity: 1,
      })
    );
  };

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <section className={`item ${scroll ? "item__scroll" : ""}`}>
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
              {numbers.map((n, i) => (
                <span
                  key={i}
                  className={`item__number ${active === i ? "active" : ""}`}
                  onClick={() => handleClick(i)}
                >
                  {n.num}
                </span>
              ))}
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
            <ul className="item__content" key={activeTab}>
              <li>
                <span className="item__content-text">
                  {tabs[activeTab].content}
                </span>
                <span className="item__content-text">
                  {tabs[activeTab].label}
                </span>
                <span className="item__content-text">
                  {tabs[activeTab].name}
                </span>
                <span className="item__content-text">
                  {tabs[activeTab].new}
                </span>
                <span className="item__content-text">
                  {tabs[activeTab].text}
                </span>
                <span className="item__content-text">
                  {tabs[activeTab].word}
                </span>
              </li>
              <li>
                <span className="item__content-text">2,35 кг/м2</span>
                <span className="item__content-text">12</span>
                <span className="item__content-text">40</span>
                <span className="item__content-text">44</span>
                <span className="item__content-text">
                  352 000 точек на 1 м2
                </span>
                <span className="item__content-text">SAG. Узбекистан</span>
              </li>
              <li>
                <span className="item__content-text">Стиль</span>
                <span className="item__content-text">Стиль</span>
                <span className="item__content-text">Коллекция</span>
                <span className="item__content-text">Материал дорса</span>
                <span className="item__content-text">Форма</span>
              </li>
              <li>
                <span className="item__content-text">Современный</span>
                <span className="item__content-text">серый / голубой</span>
                <span className="item__content-text">Prada</span>
                <span className="item__content-text">100% Полипропилен</span>
                <span className="item__content-text">Прямоугольный</span>
              </li>
            </ul>
          </div>
        </div>

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

              <div
                className="category__like"
                onClick={() => handleAddLike(item.id)}
              >
                <Heart />
              </div>

              <button
                className="category__card"
                onClick={() => handleAddCart(item.id)}
              >
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
