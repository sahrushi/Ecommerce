import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Input, Button } from "antd";
import items from "./items";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { CartContext } from "./App";

const { Search } = Input;

function Products(props) {
  let { id } = useParams();

  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    const listItems = items.filter((item) => item.category === id);

    setOriginalProducts(listItems);
    setProducts(listItems);
  }, [id]);

  const handleSearch = (event) => {
    const listItems = originalProducts.filter((item) =>
      item.title.toLowerCase().includes(event.toLowerCase())
    );
    setProducts(listItems);
  };

  const resetSearch = () => {
    setProducts(originalProducts);
  };

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
    <Col>
      <Row
        gutter={[32, 32]}
        justify="space-between"
        style={{ padding: "30px" }}
      >
        <Col>
          <h1>
            {id} ({products.length})
          </h1>
        </Col>

        <Col>
          <Row gutter={[32, 32]}>
            <Col>
              <Search
                placeholder="Search for Products..."
                onSearch={handleSearch}
                enterButton
              />
            </Col>

            <Col>
              <Button onClick={() => resetSearch()}>Reset</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={[32, 32]} style={{ padding: "30px" }}>
        {products.map((item) => {
          return (
            <Col span={6} key={item.id}>
              <Item itemInfo={item} addToCart={addToCart} />
            </Col>
          );
        })}
      </Row>
    </Col>
  );
}

export default Products;
