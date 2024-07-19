"use client";
import Container from "@/app/Components/Container/Container";
import { useParams } from "next/navigation";
import Image from "next/image";
import "./styles.scss";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Asd from "../../../../../public/icons/asd.svg";
import Zoom from "@/app/Components/ImageInnerZoom/ImageInnerZoom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/Slices/Add.Slices";
import { addCart } from "@/app/store/Slices/Cart.Slices";
import Text from "@/app/Components/Text/Text";
import Products from "@/app/Components/Products/Products";
import { numbers, products, Records, tabs, Titles } from "@/app/utils/data";

const Detail = () => {
  const params = useParams();
  const { id } = params;

  const [activeTab, setActiveTab] = useState(0);

  const [clickedIndex, setClickedIndex] = useState(null);

  const [active, setActive] = useState();

  const [scroll, setScroll] = useState(false);

  const [activeImage, setActiveImage] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);

  const product = products.find((item) => item.id === parseInt(id, 10));

  const handleImageClick = (index, image) => {
    setClickedIndex(index);
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
    <section className={`item ${scroll ? "scroll" : ""}`}>
      <Container>
        <div className="item__flex">
          {Titles.map((item, index) => (
            <span key={index} className="item__line">
              {item.title}
              <RiArrowRightSLine
                style={{ marginLeft: "5px", marginRight: "5px" }}
              />
            </span>
          ))}
        </div>

        <div className="item__main">
          <div className="item__main-box">
            <div className="item__main-flex">
              {products.map((item, index) => (
                <div
                  key={index}
                  className={`item__wrapper ${
                    clickedIndex === index ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick(index, item.img)}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={70}
                    height={74}
                  />
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
              {Records.map((record, index) => (
                <span key={index} className="item__div-flex">
                  {record.label}
                  <p style={{ marginLeft: "10px", marginRight: "10px" }}>
                    {record.points}
                  </p>
                  <p>{record.text}</p>
                </span>
              ))}
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

        <Text text={"Новые колекции"} />
        <ul className="product__ul">
          {products.map((item, index) => (
            <Products
              key={index}
              Img={item.img}
              condition={item.condition}
              title={item.title}
              price={item.price}
              id={item.id}
              AddLike={handleAddLike}
              AddCart={handleAddCart}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Detail;
