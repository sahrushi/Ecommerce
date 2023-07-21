import { Card, Row, Col, Button } from "antd";
import { MinusOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

function CartItems(props) {
  const { itemInfo } = props;
  const disPrice = itemInfo.price - (itemInfo.discount * itemInfo.price) / 100;
  const [quan, setQuan] = useState(itemInfo.quantity);

  useEffect(() => {
    setQuan(itemInfo.quantity);
  }, [itemInfo.quantity]);

  const handleRemove = (item) => {
    props.handleRemove(item);
  };
  const handleIncrement = () => {
    setQuan((quan) => quan + 1);
  };
  const handleDecrement = (item) => {
    if (quan === 0) {
      handleRemove(item);
    } else {
      setQuan((quan) => quan - 1);
      if (quan - 1 === 0) {
        handleRemove(item);
        setQuan(itemInfo.quantity)
      }
    }
  };
  
  return (
    <div>
      <Card>
        <Row justify={"space-between"}>
          <Col>
            <Row gutter={[16, 16]}>
              <Col>
                <img
                  src={itemInfo.image}
                  alt={itemInfo.title}
                  style={{ height: "65px", width: "60px" }}
                />
              </Col>
              <Col>
                <h1 style={{ fontSize: "14px" }}>{itemInfo.title}</h1>
                <h5>Rs: {disPrice*quan}</h5>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="end">
              <Button
                onClick={() => handleRemove(itemInfo)}
                style={{ border: "0px", fontSize: "10px", marginTop: "10px" }}
              >
                <CloseOutlined />
              </Button>
            </Row>
            <Row gutter={[4, 4]}>
              <Col>
                <Button
                  onClick={() => handleDecrement(itemInfo)}
                  style={{
                    fontSize: "12px",
                    padding: "5px",
                    marginTop: "17px",
                    height: "25px",
                  }}
                >
                  <MinusOutlined />
                </Button>
              </Col>
              <Col>
                <p style={{ fontSize: "15px" }}>{quan}</p>
              </Col>
              <Col>
                <Button
                  onClick={handleIncrement}
                  style={{
                    fontSize: "12px",
                    padding: "5px",
                    marginTop: "17px",
                    height: "25px",
                  }}
                >
                  <PlusOutlined />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CartItems;
