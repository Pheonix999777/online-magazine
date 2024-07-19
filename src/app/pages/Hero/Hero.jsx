"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/Components/Container/Container";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import DubbleRight from "../../../../public/icons/dubble-right.svg";
import Photo from "../../../../public/Imiges/photo.png";
import { images } from "@/app/utils/data";

const Hero = () => {
  const [scroll, setScroll] = useState(false);

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
    <section className={`hero ${scroll ? "scroll" : ""}`}>
      <Container>
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
                <div className="hero__main">
                  <div className="hero__wrapper">
                    <h1 className="hero__title">{image.title}</h1>
                    <p className="hero__text">{image.text}</p>
                    <button className="hero__btn">
                      <span className="hero__btn-icon">
                        <DubbleRight />
                      </span>
                      <span className="hero__btn-new-icon">
                        <DubbleRight />
                      </span>
                      Подробнее
                    </button>
                  </div>
                  <div className="hero__img-box">
                    <Image
                      className="hero__first-img"
                      src={image.img}
                      alt={image.title}
                    />
                    <Image className="hero__img" src={Photo} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
