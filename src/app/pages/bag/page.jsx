"use client";
import Container from "@/app/Components/Container/Container";
import "./styles.scss";
import Img from "../../../../public/Imiges/image-removebg-preview (27) 1 (1).png";
import Img2 from "../../../../public/Imiges/image-removebg4.png";
import Img3 from "../../../../public/Imiges/image-removebg1.png";
import Img4 from "../../../../public/Imiges/image-removebg2.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function LikeCarts() {
  const carts = useSelector((state) => state.add.item);
  const [cartDetails, setCartDetails] = useState([]);

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

  useEffect(() => {
    const findDetails = carts.map((cartItem) => {
      return {
        ...products.find((product) => product.id === cartItem.productId),
      };
    });
    setCartDetails(findDetails);
  }, [carts]);

  return (
    <section className="like">
      <Container>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartDetails.map((product, index) => (
            <li style={{ maxWidth: "400px", margin: "10px" }} key={index}>
              <Image
                src={product.img}
                alt="product"
                width={180}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
