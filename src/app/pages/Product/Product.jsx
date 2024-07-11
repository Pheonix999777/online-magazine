import Container from "@/app/Components/Container/Container";
import "./styles.scss";
import Img from "../../../../public/Imiges/image-removebg-preview (27) 1 (1).png";
import Img2 from "../../../../public/Imiges/image-removebg4.png";
import Img3 from "../../../../public/Imiges/image-removebg1.png";
import Img4 from "../../../../public/Imiges/image-removebg2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Shopping from "../../../../public/icons/shoppingbag.svg";
import Link from "next/link";

export default function Product() {
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
    <section className="product">
      <Container>
        <span className="product__select">
          Топ бестселлеров <MdOutlineKeyboardArrowRight />
        </span>

        <ul className="product__ul">
          {products.map((item, index) => (
            <li key={index} className="product__list">
              <Link
                className="product__link"
                href={`/pages/categories/${item.id}`}
              >
                <div className="product__box">
                  <Image
                    className="product__box-img"
                    src={item.img}
                    alt=""
                    width={252}
                    height={252}
                  />
                </div>
                <span className="product__text">New</span>
                <h3 className="product__title">{item.title}</h3>
                <span className="product__price"> {item.price}</span>
              </Link>
              <button className="product__card">
                <Shopping />
                добавить в корзину
              </button>
            </li>
          ))}
        </ul>

        <div className="product__bottom">
          {" "}
          <span className="product__select">
            Новые колекции <MdOutlineKeyboardArrowRight />
          </span>
          <ul className="product__ul">
            {products.map((item, index) => (
              <li key={index} className="product__list">
                <div className="product__box">
                  <Image
                    className="product__box-img"
                    src={item.img}
                    alt=""
                    width={252}
                    height={252}
                  />
                </div>
                <span className="product__text">New</span>
                <h3 className="product__title">{item.title}</h3>
                <span className="product__price"> {item.price}</span>
                <button className="product__card">
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
