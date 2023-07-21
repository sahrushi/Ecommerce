import React, { useState, useEffect } from "react";
import { Row, Card, Button, Col } from "antd";
import {
  MinusOutlined,
  PlusCircleFilled,
  PlusOutlined,
} from "@ant-design/icons";

function Item(props) {
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    setItemDetails(props.itemInfo);
  }, [props]);

  const disPrice =
    itemDetails.price - (itemDetails.discount * itemDetails.price) / 100;
  const [quan, setQuan] = useState(itemDetails.quantity);

  useEffect(() => {
    setQuan(itemDetails.quantity);
  }, [itemDetails.quantity]);

  const addOrDelCart = (item) => {
    const updatedItem = { ...item, quantity: quan };
    props.addToCart(updatedItem);
    setQuan(1)
  };

  const handleIncrement = () => {
    setQuan((quan) => quan + 1);
  };
  const handleDecrement = () => {
    if (quan === 0) {
      setQuan(0);
    } else {
      setQuan((quan) => quan - 1);
    }
  };

  return (
    <div>
      <Card hoverable size="small">
        <div style={{ textAlign: "center" }}>
          <Row justify="center">
            <img
              src={itemDetails.image}
              alt={itemDetails.title}
              style={{ height: "fit-content", width: "fit-content" }}
            />
          </Row>
          <Row justify="left">
            <h2 style={{ font: "16px ProximaNovaA-Regular" }}>
              {itemDetails.title}
            </h2>
          </Row>
          <Row gutter={[4, 4]}>
            <Col>
              <p style={{ font: "14px ProximaNovaA-Regular" }}>MRP : </p>
            </Col>
            <Col>
              <p
                style={{
                  font: "14px ProximaNovaA-Regular",
                  textDecoration: itemDetails.discount && "line-through",
                }}
              >
                {itemDetails.price}
              </p>
            </Col>
            <Row>
              <Col>
                <p
                  style={{
                    font: "14px ProximaNovaA-Regular",
                    display: !itemDetails.discount && "none",
                  }}
                >
                  {disPrice}
                </p>
              </Col>
            </Row>
          </Row>
          <Row justify={"space-between"} gutter={[6, 6]}>
            <Col>
              <Row gutter={[6, 6]}>
                <Col>
                  <Button onClick={handleDecrement}>
                    <MinusOutlined />
                  </Button>
                </Col>
                <Col>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      marginTop: "-5px",
                    }}
                  >
                    {quan}
                  </p>
                </Col>
                <Col>
                  <Button onClick={handleIncrement}>
                    <PlusOutlined />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Button type="primary" onClick={() => addOrDelCart(itemDetails)}>
                <PlusCircleFilled /> Add
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default Item;
