// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slides from './Slides'
// import Slide from './Slide'



export default function Banner() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
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
        className='mySwiper'
      >
        <SwiperSlide>
        <Slides></Slides>
          {/* <img src="https://i.postimg.cc/SRvdjXXY/lewis-j-goetz-p3zbb3-Efczw-unsplash.jpg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
            <Slides></Slides>
          {/* <Slide
           <img src="https://i.postimg.cc/SRvdjXXY/lewis-j-goetz-p3zbb3-Efczw-unsplash.jpg" alt="" />
            text='Get Your Graphics Design Projects Done in minutes'
          /> */}
          {/* <img src="https://i.postimg.cc/SRvdjXXY/lewis-j-goetz-p3zbb3-Efczw-unsplash.jpg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
        <Slides></Slides>
          {/* <Slide
            image={bgimg3}
            text='Start Your Digital Marketing Campaigns up n running'
          /> */}
          {/* <img src="https://i.postimg.cc/SRvdjXXY/lewis-j-goetz-p3zbb3-Efczw-unsplash.jpg" alt="" /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
