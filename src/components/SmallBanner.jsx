import { SwiperSlide } from "swiper/react";
import FoodsSlider from "./FoodsSlider";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Fade } from "react-awesome-reveal";



const SmallBanner = () => {
    return (
        <Fade>
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
                            delay: 3000,
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
                                image="https://i.postimg.cc/QdkjMBBH/jay-wennington-N-Y88-TWm-Gw-A-unsplash.jpg"
                                text={"Indulge in Our Exquisite Creations"}
                                paragraph={""}
                            ></FoodsSlider>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FoodsSlider
                                image="https://i.postimg.cc/fLxsK9bh/jason-jarrach-LJ5-Ih-BA4gbs-unsplash.jpg"
                                text={"Savory Delights from Around the World"}
                                paragraph={"here is paragraph"}
                            ></FoodsSlider>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FoodsSlider
                                image="https://i.postimg.cc/brJVWWMN/rachel-park-hrlvr2-Zl-UNk-unsplash.jpg"
                                text={
                                    "Taste the Global Tapestry on Our Dinner Menu"
                                }
                                paragraph={"here is paragraph"}
                            ></FoodsSlider>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FoodsSlider
                                image="https://i.postimg.cc/kGBwf862/rumman-amin-n-Ks-o-XRGGEg-unsplash.jpg"
                                text={"Around the World on a Plate"}
                                paragraph={"here is paragraph"}
                            ></FoodsSlider>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default SmallBanner;