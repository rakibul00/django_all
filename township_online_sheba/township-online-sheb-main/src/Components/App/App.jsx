import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TextBlock from '../TextBlock/TextBlock';
import AppImage2 from '../AppImage2/AppImage2';
import AppImage3 from '../AppImage3/AppImage3';
import down from '../../assets/download.png'
import { Link } from 'react-router-dom';
import TextBlock1 from '../TextBlock1/TextBlock1';

const App = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYvs5arsp3PA8-XCi7bsP-Ms1eiikfBZzvQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYvs5arsp3PA8-XCi7bsP-Ms1eiikfBZzvQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYvs5arsp3PA8-XCi7bsP-Ms1eiikfBZzvQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYvs5arsp3PA8-XCi7bsP-Ms1eiikfBZzvQ&s',
    ];

    return (
        <div className="max-w-[1400px] mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center mt-11 mb-20 space-y-6 md:space-y-0 md:space-x-8">
                <div className="text-center md:text-left md:w-1/2 space-y-4">
                    <h2 className="text-lg font-semibold italic text-orange-500">"অনলাইনে সেবা নিন ঘরে বসেই"</h2>
                    <h1 className="text-5xl font-bold text-gray-900">টাউনশীপ অনলাইন সেবা</h1>
                    <p className="text-gray-600">
                        অ্যাপসটি <strong className='text-black'>১৯শে অক্টোবর ২০২৪ইং শনিবার</strong> সকাল ১০.০০ ঘটিকা হইতে ডাউনলোড করে ব্যবহার করতে পারবেন। অ্যাপটি ডাউনলোড করতে নিচের DOWNLOAD বাটনে ক্লিক বা টাচ করুন।
                        অ্যাপটি সর্বশেষ আপডেটঃ ১৯ অক্টোবর ২০২৪ইং।
                    </p>
                    <div>
                        <Link
                            to="https://www.facebook.com/townshiponlineseba01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform transform hover:scale-105 duration-300" // Apply the hover effect to the anchor tag
                        >
                            <img src={down} alt="YouTube Link" className="h-16 transition-transform transform hover:scale-105 duration-300" />
                        </Link>
                    </div>



                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <Slider {...sliderSettings} className="w-full">
                        {images.map((image, index) => (
                            <div key={index} className="px-2">
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="h-[460px] w-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='-mt-20'>
            <TextBlock1 />
            <TextBlock />
            <AppImage2 />
            <AppImage3 />
            </div>
        </div>
    );
};

export default App;
