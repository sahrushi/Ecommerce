import React from "react";
import items from "../items";
import Carousel from "react-elastic-carousel";
import Item from "../Item";
import { CartContext } from "../App";
import { useContext } from "react";

function Dairy() {
  const cards = items.filter(
    (item) => item.featured && item.category === "Dairy"
  );
  const { setCart } = useContext(CartContext);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: "rgb(68,68,68)",
          font: "24px ProximaNovaA-Regular",
          fontWeight: "lighter",
        }}
      >
        Dairy
      </h2>
      <Carousel breakPoints={breakPoints}>
        {cards.map((item) => {
          return <Item itemInfo={item} addToCart={addToCart} />;
        })}
      </Carousel>
    </div>
  );
}

export default Dairy;
