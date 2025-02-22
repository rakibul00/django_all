// TestimonialSlider.jsx
import React from 'react';
import 'swiper/swiper.min.css'; // Import Swiper styles
import 'swiper/components/navigation/navigation.min.css'; // Import navigation styles
import 'swiper/components/pagination/pagination.min.css'; // Import pagination styles

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper'; // Import required Swiper components

const TestimonialSlider = () => {
    const testimonials = [
        {
            image: 'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/240595331_234491978690770_5591950349745225189_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEoN9sGFdIidk5QmeHk0pbd3oMMuaKlkjTegwy5oqWSNNph79p8g8tb5J5HmEuevrKXFNs3Rrsq1ZUxkA6lj9_v&_nc_ohc=eoaq-ZFz28EQ7kNvgGKvBB-&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AzB14wcZeP62ZraXTDUyyDC&oh=00_AYBfLpLeFkux4a72gCTxtRILJvI5q2Hps5EZ2sOHESOFWQ&oe=6716F445',
            name: 'SHEIKH SHAADI',
            text: 'Sadi testimonial text can go here. He was very happy with the service and had a great experience.',
        },
        {
            image: 'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/240666219_233731592100142_6565228732551933116_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeE8Sz0WguIzy7EtrMmLcdzS4SVbnvnOPAjhJVue-c48CDd94cpc0hvYpoEZvTzrArx3HaSWqC5eHaaec1ANlxxA&_nc_ohc=CQDZBizsgQ4Q7kNvgEwKfKu&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AL3sHWACV9yb1QTXcwDYfmC&oh=00_AYCEKMJNwgWT-jL6xN153NT1thRfOz4H-vbErHvKg8ezpA&oe=6716C9D2',
            name: 'John Doe',
            text: "John's testimonial text can go here. He was very happy with the service.",
        },
        {
            image: 'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/274162817_339557664850867_8048726256019410866_n.jpg?stp=c0.113.683.683a_dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEcX8eAYdsp6DSI2gKtbKVcMak6yDxWGuIxqTrIPFYa4s6Ktlvd7L6rq7zUyQ5yO4_ppZ_YDBqfOmiBLjJVM5rp&_nc_ohc=-jjOrOeg_ZIQ7kNvgEPvMYa&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AQ7LsrKNgHg8DAna4tunBXG&oh=00_AYBqwewULypb38cOmBB8DX6CCyUMIdnvoPfnixMyApc3Og&oe=6716E132',
            name: 'Jane Smith',
            text: "Jane's feedback. She loved the design and appreciates the attention to detail.",
        },
        {
            image: 'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/273539362_333341752139125_1837731303946980928_n.jpg?stp=c0.113.683.683a_dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeE-2PN_037NSKA3lVL3VUOTOMmqyxoZQYU4yarLGhlBhXEnZXBcpm7S2X56Hu8KpGaB5v6BowvOARU0kxyJVUy4&_nc_ohc=EYz363NArm4Q7kNvgFEOSWQ&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AQ7LsrKNgHg8DAna4tunBXG&oh=00_AYCybVsY1NtiWZstghnDbZtAK2RveJb1Hwb7UINTR3G_Hg&oe=6716DFA6',
            name: 'Mark Anthony',
            text: "Mark found the marketing strategies effective and the team responsive to feedback.",
        },
    ];

    return (
        <div className="md:mt-1 mt-5">
            <h1 className="text-center text-3xl font-bold mb-6">What Our Users Say</h1>
            <Swiper
                modules={[Navigation, Pagination]} // Add the Navigation and Pagination modules
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="bg-white shadow-lg rounded-lg p-4">
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full border-2 border-orange-500 mr-4"
                            />
                            <div>
                                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                            </div>
                        </div>
                        <p className="text-gray-700 text-base">{testimonial.text}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
