import Container from "@/app/Components/Container/Container";
import "./styles.scss";
import Link from "next/link";
import Image from "next/image";
import Img from "../../../../public/Imiges/image-removebg-preview (27) 1.png";
import Img2 from "../../../../public/Imiges/image-removebg-preview (33) 1.png";
import Img3 from "../../../../public/Imiges/image-removebg-preview (27) 1 (1).png";
import Img4 from "../../../../public/Imiges/image-removebg-preview (27) 1 (2).png";
import DubbleRight from "../../../../public/icons/dubble-right.svg";
import ClohtesLink from "./ClothesLink/ClothesLink";

export default function Clothes() {
  return (
    <section className="clothes">
      <Container>
        <div className="clothes__content">
          <div className="clothes__product box1">
            <div className="clothes__wrapper">
              <span className="clothes__text">144 одежд</span>
              <h2 className="clothes__title">
                Одежды для женщин на любой вкус и сезон
              </h2>
              <span className="clothes__price">от 60 000 uzs</span>
              <div className="clothes__link-box">
                <ClohtesLink link={"#"} text={"Подробнее"} />
              </div>
            </div>

            <div className="clothes__img-box">
              <Image
                className="clothes__img"
                src={Img}
                alt=""
                width={294}
                height={386}
              />
            </div>
          </div>
          <div className="clothes__product box2">
            <div className="clothes__product-div">
              <span className="clothes__text">364 одежд</span>
              <h3 className="clothes__subname">Одежды для мальчиков </h3>
              <span className="clothes__price-text">от 60 000 uzs</span>
              <div className="clothes__product-wrapper">
                <ClohtesLink link={"#"} text={"Подробнее"} />
              </div>
            </div>
            <div className="clothes__img-box">
              <Image
                className="clothes__product-img"
                src={Img2}
                alt=""
                width={268}
                height={268}
              />
            </div>
          </div>

          <div className="clothes__product-bottom ">
            <div className="clothes__product-text">
              <span className="clothes__text">364 одежд</span>
              <h3 className="clothes__subname">Одежды для мальчиков</h3>
              <span className="clothes__price-text">от 60 000 uzs</span>
              <div className="clothes__product-wrapper">
                <ClohtesLink link={"#"} text={"Подробнее"} />
              </div>
            </div>

            <div className="clothes__img-box">
              <Image
                className="clothes__bottom-img"
                src={Img3}
                alt=""
                width={151}
                height={151}
              />
            </div>
          </div>

          <div className="clothes__product-bottom">
            <div className="clothes__product-text">
              <span className="clothes__text">364 одежд</span>
              <h3 className="clothes__subname">Одежды для мальчиков </h3>
              <span className="clothes__price-text">от 60 000 uzs</span>
              <div className="clothes__product-wrapper">
                <ClohtesLink link={"#"} text={"Подробнее"} />
              </div>
            </div>

            <div className="clothes__img-box">
              <Image
                className="clothes__bottom-img"
                src={Img4}
                alt=""
                width={151}
                height={151}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
