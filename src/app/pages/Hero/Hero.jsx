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
import DubbleRight from "../../../../public/icons/dubble-right.svg";
import Photo from "../../../../public/Imiges/photo.png";

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
                      <DubbleRight />
                      Подробнее
                    </button>
                  </div>
                  <div className="hero__img-box">
                    <Image className="hero__first-img" src={image.img} alt={image.title} />
                    <Image className="hero__img" src={Photo} alt="" />
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
