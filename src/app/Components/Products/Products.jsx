import React from "react";
import Link from "next/link";
import Image from "next/image";
import Shopping from "../../../../public/icons/shoppingbag.svg";
import Heart from "../../../../public/icons/heart.svg";
import "./styles.scss";

export default function Products({
  Img,
  condition,
  title,
  price,
  AddCart,
  AddLike,
  id,
}) {
  return (
    <li className="product__list">
      <Link className="product__link" href={`/pages/categories/${id}`}>
        <div className="product__box">
          <Image
            className="product__box-img"
            src={Img}
            alt=""
            width={252}
            height={252}
          />
        </div>
        <span className="product__text">{condition}</span>
        <h3 className="product__title">{title}</h3>
        <span className="product__price">
          {price}
          <button className="product__hidden-btn">
            <Shopping />
          </button>
        </span>
      </Link>

      <div className="product__like" onClick={() => AddLike(id)}>
        <Heart />
      </div>

      <button className="product__card" onClick={() => AddCart(id)}>
        <Shopping />
        добавить в корзину
      </button>
    </li>
  );
}
