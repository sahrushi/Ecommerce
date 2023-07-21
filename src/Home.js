import React from "react";
import Slider from "./Slider";
import Vegetables from "./Carousel/Vegetables";
import Fruits from "./Carousel/Fruits";
import Dairy from "./Carousel/Dairy";
import Beverages from "./Carousel/Beverages";

function Home() {
    return (
        <div>
            <Slider />
            <Vegetables />
            <Fruits />
            <Dairy />
            <Beverages />
        </div>
    )
}

export default Home