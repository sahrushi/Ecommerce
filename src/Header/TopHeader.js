import React, { useContext, useState } from "react";
import { Badge, Drawer, Input, Avatar } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import CartItems from "../CartItems";

const { Search } = Input;
const onSearch = (value) => console.log(value);

function TopHeader() {
  const { cart, setCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleRemove = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Link to="/" style={{ marginRight: "400px", marginBottom: "5px" }}>
        <img
          src="https://www.bbassets.com/static/staticContent/bb_logo.png"
          alt="logo"
        />
      </Link>
      <div style={{ flex: 1, marginLeft: "auto", display: "flex" }}>
        <Search
          placeholder="Search for Products..."
          onSearch={onSearch}
          enterButton
          style={{ maxWidth: "500px", paddingRight: "100px" }}
        />
        <button
          onClick={showDrawer}
          style={{
            backgroundColor: "white",
            border: "0px",
            paddingRight: "30px",
            paddingLeft: "340px"
          }}
        >
          <Badge count={cart.length}>
            <ShoppingCartOutlined
              style={{ fontSize: "30px"}}
            />
          </Badge>
        </button>
        <Avatar
          style={{
            backgroundColor: "#87d068",
          }}
          icon={<UserOutlined />}
        />
        <Drawer
          title={"Cart Items (" + cart.length + ")"}
          placement="right"
          onClose={onClose}
          open={open}
        >
          {cart.map((item) => {
            return <CartItems itemInfo={item} handleRemove={handleRemove} />;
          })}
        </Drawer>
      </div>
    </div>
  );
}

export default TopHeader;
