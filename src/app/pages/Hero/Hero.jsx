"use client";
import React from "react";
import Container from "@/app/Components/Container/Container";
import Image from "next/image";
import Img from "../../../../public/Imiges/pngwing 1.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

const Hero = () => {
  const images = [
    {
      img: Img,
      title: "Jackets for all kinds",
      text: "Clothing is typically made of fabrics",
    },
    {
      img: Img,
      title: "Jackets for all kinds 10",
      text: "Clothing is typically made of fabrics",
    },
    {
      img: Img,
      title: "Jackets for all kinds 30",
      text: "Clothing is typically made of fabrics",
    },
    {
      img: Img,
      title: "Jackets for all kinds 30",
      text: "Clothing is typically made of fabrics",
    },
  ];

  return (
    <section className="hero">
      <Container>
        <div className="hero__div">
          <div className="hero__box">
            <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="hero__wrapper">
                    <h1 className="hero__title">{image.title}</h1>
                    <p className="hero__text">{image.text}</p>
                    <button className="hero__btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.64001 5.5266C5.51448 5.39753 5.34281 5.32361 5.16278 5.32111C4.98274 5.31861 4.80909 5.38773 4.68001 5.51327C4.55094 5.6388 4.47703 5.81047 4.47453 5.9905C4.47202 6.17054 4.54115 6.34419 4.66668 6.47327L6.22668 7.99993L4.66668 9.5266C4.6042 9.58857 4.5546 9.66231 4.52075 9.74355C4.48691 9.82479 4.46948 9.91192 4.46948 9.99993C4.46948 10.0879 4.48691 10.1751 4.52075 10.2563C4.5546 10.3376 4.6042 10.4113 4.66668 10.4733C4.72866 10.5358 4.80239 10.5853 4.88363 10.6192C4.96487 10.653 5.05201 10.6705 5.14001 10.6705C5.22802 10.6705 5.31516 10.653 5.3964 10.6192C5.47764 10.5853 5.55137 10.5358 5.61335 10.4733L7.61335 8.47327C7.67583 8.41129 7.72543 8.33756 7.75928 8.25632C7.79312 8.17508 7.81055 8.08794 7.81055 7.99993C7.81055 7.91192 7.79312 7.82479 7.75928 7.74355C7.72543 7.66231 7.67583 7.58857 7.61335 7.5266L5.64001 5.5266ZM11.3067 7.5266L9.30668 5.5266C9.18115 5.40106 9.01088 5.33054 8.83335 5.33054C8.65581 5.33054 8.48555 5.40106 8.36001 5.5266C8.23448 5.65214 8.16395 5.8224 8.16395 5.99993C8.16395 6.17747 8.23448 6.34773 8.36001 6.47327L9.89335 7.99993L8.36001 9.5266C8.29753 9.58857 8.24793 9.66231 8.21409 9.74355C8.18024 9.82479 8.16282 9.91192 8.16282 9.99993C8.16282 10.0879 8.18024 10.1751 8.21409 10.2563C8.24793 10.3376 8.29753 10.4113 8.36001 10.4733C8.42199 10.5358 8.49572 10.5853 8.57696 10.6192C8.6582 10.653 8.74534 10.6705 8.83335 10.6705C8.92136 10.6705 9.00849 10.653 9.08973 10.6192C9.17097 10.5853 9.24471 10.5358 9.30668 10.4733L11.3067 8.47327C11.3709 8.41307 11.4226 8.34074 11.4588 8.26045C11.495 8.18016 11.5148 8.09351 11.5173 8.00549C11.5198 7.91747 11.5048 7.82984 11.4732 7.74764C11.4417 7.66544 11.3941 7.59032 11.3333 7.5266H11.3067Z"
                          fill="black"
                        />
                      </svg>{" "}
                      Подробнее
                    </button>
                  </div>
                  <div className="slide">
                    <Image src={image.img} alt={image.title} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;