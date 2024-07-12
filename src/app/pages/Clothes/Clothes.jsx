import Container from "@/app/Components/Container/Container";
import "./styles.scss";
import Link from "next/link";
import Image from "next/image";
import Img from "../../../../public/Imiges/image-removebg-preview (27) 1.png";
import Img2 from "../../../../public/Imiges/image-removebg-preview (33) 1.png";
import Img3 from "../../../../public/Imiges/image-removebg-preview (27) 1 (1).png";
import Img4 from "../../../../public/Imiges/image-removebg-preview (27) 1 (2).png";
import DubbleRight from "../../../../public/icons/dubble-right.svg";

export default function Clothes() {
  return (
    <section className="clothes">
      <Container>
        <div className="clothes__content">
          <div className="clothes__box">
            <div className="clothes__wrapper">
              <span className="clothes__text">144 одежд</span>
              <h2 className="clothes__title">
                Одежды для женщин на любой вкус и сезон
              </h2>
              <span className="clothes__price">от 60 000 uzs</span>
              <div className="clothes__link-box">
                <Link href={"#"} className="clothes__btn">
                  <span className="clothes__btn-icon">
                    <DubbleRight />
                  </span>
                  <span className="clothes__btn-new-icon">
                    <DubbleRight />
                  </span>
                  Подробнее
                </Link>
              </div>
            </div>

            <Image
              className="clothes__img"
              src={Img}
              alt=""
              width={294}
              height={386}
            />
          </div>

          <div className="clothes__boxes">
            <div className="clothes__product">
              <div className="clothes__product-div">
                <span className="clothes__text">364 одежд</span>
                <h3 className="clothes__subname">Одежды для мальчиков</h3>
                <span className="clothes__price-text">от 60 000 uzs</span>
                <div className="clothes__product-wrapper">
                  <Link href={"#"} className="clothes__btn">
                    <span className="clothes__btn-icon">
                      <DubbleRight />
                    </span>
                    <span className="clothes__btn-new-icon">
                      <DubbleRight />
                    </span>
                    Подробнее
                  </Link>
                </div>
              </div>

              <Image
                className="clothes__img"
                src={Img2}
                alt=""
                width={268}
                height={268}
              />
            </div>

            <div className="clothes__product-box">
              <div className="clothes__product-bottom">
                <div className="clothes__product-text">
                  <span className="clothes__text">364 одежд</span>
                  <h3 className="clothes__subname">Одежды для мальчиков</h3>
                  <span className="clothes__price-text">от 60 000 uzs</span>
                  <div className="clothes__product-wrapper">
                    <Link href={"#"} className="clothes__btn">
                      <span className="clothes__btn-icon">
                        <DubbleRight />
                      </span>
                      <span className="clothes__btn-new-icon">
                        <DubbleRight />
                      </span>
                      Подробнее
                    </Link>
                  </div>
                </div>

                <Image
                  className="clothes__img"
                  src={Img3}
                  alt=""
                  width={151}
                  height={151}
                />
              </div>

              <div className="clothes__product-bottom">
                <div className="clothes__product-text">
                  <span className="clothes__text">364 одежд</span>
                  <h3 className="clothes__subname">Одежды для мальчиков</h3>
                  <span className="clothes__price-text">от 60 000 uzs</span>
                  <div className="clothes__product-wrapper">
                    <Link href={"#"} className="clothes__btn">
                      <span className="clothes__btn-icon">
                        <DubbleRight />
                      </span>
                      <span className="clothes__btn-new-icon">
                        <DubbleRight />
                      </span>
                      Подробнее
                    </Link>
                  </div>
                </div>

                <Image
                  className="clothes__img"
                  src={Img4}
                  alt=""
                  width={151}
                  height={151}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
