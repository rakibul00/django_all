import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

// Import the logos (replace these paths with your actual image paths)
import somokalLogo from '../../assets/atn.png';
import atnLogo from '../../assets/atn.png';
import jamunaTVLogo from '../../assets/somay.jpeg';
import bbcBanglaLogo from '../../assets/j.png';
import jugantorLogo from '../../assets/somay.jpeg';
import ittefaqLogo from '../../assets/atn.png';
import { Link } from 'react-router-dom';

const MediaCoverage = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-11 -mt-20  bg-[#F7F8FA] rounded" style={{ height: '250px' }}>
      <h2 className="text-center text-2xl font-semibold -mt-22 mb-6">Media Coverage</h2>
      
      <Swiper
        spaceBetween={10} // Set the gap between slides to 10px
        centeredSlides={true}
        autoplay={{
          delay: 3000, // Slide change every 3 seconds
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        slidesPerView={7} // Default for larger screens
        breakpoints={{
          // Responsive breakpoints
          1024: { slidesPerView: 6 },  // For large screens
          768: { slidesPerView: 4 },   // For medium screens
          640: { slidesPerView: 3 },   // For small screens
          480: { slidesPerView: 2 },   // For very small screens
          320: { slidesPerView: 1 },   // For extra small screens
        }}
        className="mySwiper"
        style={{ height: '100%' }} // Ensure Swiper takes full height
      >
        <SwiperSlide>
          <Link to='https://www.atnnewstv.com'>
          <img src={somokalLogo} alt="Somokal Logo" className="w-32 h-32 object-contain mx-auto" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={atnLogo} alt="ATN News Logo" className="w-32 h-32 object-contain mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <Link to='https://www.atnnewstv.com'><img src={jamunaTVLogo} alt="Jamuna TV Logo" className="w-32 h-32 object-contain mx-auto" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bbcBanglaLogo} alt="BBC Bangla Logo" className="w-32 h-32 object-contain mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={jugantorLogo} alt="Jugantor Logo" className="w-32 h-32 object-contain mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ittefaqLogo} alt="Ittefaq Logo" className="w-32 h-32 object-contain mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MediaCoverage;
