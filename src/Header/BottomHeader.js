import React from "react";
import { Anchor } from "antd";

function BottomHeader() {
  return (
    <div>
      <Anchor
        direction="horizontal"
        items={[
          {
            key: "Vegetables",
            title: "Vegetables",
            href: "/Products/Vegetables",
          },
          {
            key: "Fruits",
            title: "Fruits",
            href: "/Products/Fruits",
          },
          {
            key: "Diary",
            title: "Dairy",
            href: "/Products/Dairy",
          },
          {
            key: "Beverages",
            title: "Beverages",
            href: "/Products/Beverages",
          },
        ]}
        style={{ backgroundColor: "ghostwhite" }}
      />
    </div>
  );
}

export default BottomHeader;
