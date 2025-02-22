import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/1.png';
import slider2 from '../../assets/2.png';
import slider3 from '../../assets/3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';  // Import Swiper autoplay styles

// Import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const ImageSlider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // 3 seconds per slide
          disableOnInteraction: false, // Continues autoplay even after user interaction
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        style={{ height: 'auto' }}
      >
        <SwiperSlide>
          <img src={slider1} alt="Description of slider 1" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="Description of slider 2" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="Description of slider 3" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="Description of slider 2" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="Description of slider 1" className="w-full h-auto object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
