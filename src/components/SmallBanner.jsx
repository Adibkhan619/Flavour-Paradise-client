import { SwiperSlide } from "swiper/react";
import FoodsSlider from "./FoodsSlider";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const SmallBanner = () => {
    return (
        <div>
            <div>
                {" "}
                <div className="container  mx-auto">
                    <Swiper
                        spaceBetween={0}
                        // direction={'vertical'}
                        centeredFoodsSlider={true}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper "
                    >
                        <SwiperSlide>
                            <FoodsSlider
                                image={img1}
                                text={"Indulge in Our Exquisite Creations"}
                                paragraph={""}
                            ></FoodsSlider>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FoodsSlider
                                image={img2}
                                text={"Savory Delights from Around the World"}
                                paragraph={"here is paragraph"}
                            ></FoodsSlider>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FoodsSlider
                                image={img3}
                                text={
                                    "Taste the Global Tapestry on Our Dinner Menu"
                                }
                                paragraph={"here is paragraph"}
                            ></FoodsSlider>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FoodsSlider
                                image={img4}
                                text={"Around the World on a Plate"}
                                paragraph={"here is paragraph"}
                            ></FoodsSlider>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SmallBanner;