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
// import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import { Fade } from "react-awesome-reveal";

export default function Carousel() {
    return (
        <Fade>
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
                    <Slides image="https://i.postimg.cc/XJ2QfxJM/jed-owen-O4w-Sm-Nb6w18-unsplash.jpg"  paragraph={'We pride ourselves on delivering exceptional culinary experiences. From our carefully crafted menus to our inviting atmosphere, every visit promises delightful moments and unforgettable flavors.'} text={'Welcome to Flavour Paradise'}></Slides>
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image="https://i.postimg.cc/jj0928WZ/shayna-douglas-H8qwry-GP-h0-unsplash.jpg" 
                    text={'Indulge in Culinary Excellence'} paragraph={'Step into a world of culinary excellence at Flavour Paradise. Our chefs blend passion with innovation, presenting dishes that tantalize the senses and leave a lasting impression on every palate.'}></Slides>
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image="https://i.postimg.cc/bYCBkYDG/jordan-arnold-Ul07-QK2-AR-0-unsplash.jpg" text={'Experience Unmatched Hospitality'} paragraph={'At Flavour Paradise, hospitality is not just a service; it is a philosophy. Our dedicated team ensures every guest feels welcomed and valued, creating memorable dining experiences filled with warmth and care'}></Slides>
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image="https://i.postimg.cc/Tw2t5BTq/jed-owen-Eg-G6wcsj-Ft-E-unsplash.jpg" text={'Discover Your New Favorite Dining Destination'} paragraph={'Embark on a journey of taste and discovery at Flavour Paradise. From cozy dinners to celebratory gatherings, our restaurant offers an inviting ambiance and a diverse menu that caters to every occasion and craving.'}></Slides>
                </SwiperSlide>
                
            </Swiper>
        </div>
        </Fade>
    );
}
