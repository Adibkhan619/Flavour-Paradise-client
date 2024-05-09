// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Slides from "./BannerSlides/Slides";
import SlidesOne from "./BannerSlides/SlidesOne";

export default function Carousel() {
    return (
        <div className="container  mx-auto">
            <Swiper
                spaceBetween={0}
                // direction={'vertical'}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SlidesOne></SlidesOne>
                </SwiperSlide>
                <SwiperSlide>
                    
                </SwiperSlide>
                <SwiperSlide>
                 
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
