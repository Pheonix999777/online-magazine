"use client";
import Container from "@/app/Components/Container/Container";
import { RiArrowDownSLine } from "react-icons/ri";
import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/Slices/Add.Slices";
import { addCart } from "@/app/store/Slices/Cart.Slices";
import Text from "@/app/Components/Text/Text";
import Products from "@/app/Components/Products/Products";
import { products } from "@/app/utils/data";

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
          <div className="category__flex-hidden">
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
          </div>
        </Container>
      </div>

      <Container>
        <Text text={"Топ бестселлеров"} />

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

        <div className="category__bottom">
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
        </div>
      </Container>
    </section>
  );
}
