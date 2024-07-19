"use client";
import Container from "@/app/Components/Container/Container";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { addCart } from "@/app/store/Slices/Cart.Slices";
import { addToCart } from "@/app/store/Slices/Add.Slices";
import Text from "@/app/Components/Text/Text";
import Products from "@/app/Components/Products/Products";
import { products } from "@/app/utils/data";

export default function Product() {
  const dispatch = useDispatch();

  const handleAddLike = (productId) => {
    dispatch(
      addToCart({
        productId,
        quantity: 1,
      })
    );
  };

  const handleAddCart = (productId) => {
    dispatch(
      addCart({
        productId,
        quantity: 1,
      })
    );
  };

  return (
    <section className="product">
      <Container>
        <Text text={"Топ бестселлеров "} />
        <ul className="product__ul">
          {products.map((item, index) => (
            <Products
              key={index}
              Img={item.img}
              condition={item.condition}
              title={item.title}
              price={item.price}
              id={item.id}
              AddLike={handleAddLike}
              AddCart={handleAddCart}
            />
          ))}
        </ul>

        <div className="product__bottom">
          <Text text={" Новые колекции"} />

          <ul className="product__ul">
            {products.map((item, index) => (
              <Products
                key={index}
                Img={item.img}
                condition={item.condition}
                title={item.title}
                price={item.price}
                id={item.id}
                AddLike={handleAddLike}
                AddCart={handleAddCart}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
