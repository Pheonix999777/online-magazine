import magazine from "../../../../public/Imiges/Mask group.png";
import Container from "@/app/Components/Container/Container";
import Image from "next/image";
import "./styles.scss";

export default function Faqs() {
  return (
    <section className="faqs">
      <Container>
        <div className="faqs__wrapper">
          <h4 className="faqs__title">О нашем магазине</h4>
          <p className="faqs__text">
            Ведущий российский производитель стильной одежды для детей от
            рождения до десяти лет. Наша детская одежда отвечает высочайшим
            стандартам качества и ожиданиям даже самых требовательных родителей,
            отдающих предпочтение только лучшим детским товарам.
          </p>

          <div className="faqs__content">
            <div className="faqs__box">
              🥷 2000+{" "}
              <span className="faqs__titul">Повседневных клиентов</span>
            </div>
            <div className="faqs__box">
              🔥 14+
              <span className="faqs__titul">Филлиалов</span>
            </div>
            <div className="faqs__box">
              ✅ 254+ <span className="faqs__titul">выполненных доставок</span>
            </div>
          </div>
        </div>
        <Image className="faqs__img" src={magazine} alt="magazine Img" />
      </Container>
    </section>
  );
}
