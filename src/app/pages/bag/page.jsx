"use client";
import Container from "@/app/Components/Container/Container";
import "./styles.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { products } from "@/app/utils/data";

export default function LikeCarts() {
  const carts = useSelector((state) => state.add.item);
  const [cartDetails, setCartDetails] = useState([]);

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
