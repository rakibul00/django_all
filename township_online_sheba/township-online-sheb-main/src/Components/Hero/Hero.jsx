
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
    return (
        <div>
             <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg bg-white"
          style={{
            'background-image':
              'url(https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="300">
          Township Online Seba          </div>
          <div className="subtitle" data-swiper-parallax="200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="100">
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem aliquam vitae molestiae nam, temporibus quisquam error ut sequi earum eligendi soluta libero? Qui, quasi debitis id earum quae porro fuga modi minima tempora maxime reiciendis officia iure aliquam laborum? lorem40 feugiat.
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              tincidunt ut libero. Aenean feugiat non eros quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem aliquam vitae molestiae nam, temporibus quisquam error ut sequi earum eligendi soluta libero? Qui, quasi debitis id earum quae porro fuga modi minima tempora maxime reiciendis officia iure aliquam laborum? 
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Hero;