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
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/Slices/Add.Slices";
import { addCart } from "@/app/store/Slices/Cart.Slices";
import Heart from "../../../../public/icons/heart.svg";

export default function Categories() {
  const [openIndex, setOpenIndex] = useState(null);
  const [scroll, setScroll] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(400);
  const dropdownRef = useRef([]);

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

  const changeBackground = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setSticky(false);
    } else {
      if (currentScrollY <= 510) {
        setSticky(true);
      }
    }

    setLastScrollY(currentScrollY);
  };

  const changeSection = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openIndex !== null &&
        dropdownRef.current[openIndex] &&
        !dropdownRef.current[openIndex].contains(event.target)
      ) {
        setOpenIndex(null);
      }
    };

    window.addEventListener("scroll", changeSection);
    window.addEventListener("scroll", changeBackground);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("scroll", changeSection);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openIndex, lastScrollY]);

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

  return (
    <section className={`category ${scroll ? "scroll" : ""}`}>
      <div className={`category__flex ${isSticky ? "sticky" : ""}`}>
        <Container>
          <div className="category__wrapper">
            {data.map((item, index) => (
              <div
                key={index}
                className="category__words"
                ref={(el) => (dropdownRef.current[index] = el)}
              >
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
        </Container>
      </div>

      <Container>
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
        </div>
      </Container>
    </section>
  );
}
