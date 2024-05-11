// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Slides from "./BannerSlides/Slides";
// import SlidesOne from "./BannerSlides/SlidesOne";
import Slides from "./Slides";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

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
                className="mySwiper "
            >
                <SwiperSlide>
                    <Slides image="https://i.postimg.cc/XJ2QfxJM/jed-owen-O4w-Sm-Nb6w18-unsplash.jpg" text={'here are some text'} paragraph={'here is paragraph'}></Slides>
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={img2} text={'here are some text'} paragraph={'here is paragraph'}></Slides>
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={img3} text={'here are some text'} paragraph={'here is paragraph'}></Slides>
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={img4} text={'here are some text'} paragraph={'here is paragraph'}></Slides>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
