import React from "react";
import { Carousel } from "antd";

function Slider() {
    return (
        <Carousel autoplay>
            <div>
                <img src="https://www.bigbasket.com/media/uploads/banner_images/B2c_hp_m_SBF_FrozenFest_460_280623.jpg" alt=""/>
            </div>
            <div>
                <img src="https://www.bigbasket.com/media/uploads/banner_images/B2c_hp_m_gwf_noodles_460_280623.jpg" alt=""/>
            </div>
            <div>
                <img src="https://www.bigbasket.com/media/uploads/banner_images/B2c_hp_m_sbf_pickle-world_460-280623.jpg" alt=""/>
            </div>
            <div>
                <img src="https://www.bigbasket.com/media/uploads/banner_images/b2c_hp_m_C_H_Clean_Hygeinic_460-280623.jpg" alt=""/>
            </div>
        </Carousel>
    )
}

export default Slider