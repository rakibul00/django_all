import React from 'react';
import patner from '../../assets/patner.png';

const SectionWithCard = () => {
  return (
    <div className='p-2 md:p0'>
      <div className="border-2 border-orange-700 rounded flex flex-col items-center justify-center my-5 p-6 bg-[#F8F8FF] max-w-[1400px] mx-auto">
        {/* Title Section */}
        <div className="flex items-center relative mb-4">
          <h2 className="text-2xl font-bold px-2 text-black">আমাদের পার্টনার সমূহ</h2>
          <div className="absolute top-1/2 right-0 md:w-36 h-0.5 bg-orange-500 md:-mr-36"></div>
        </div>

        {/* Card Section */}
        <div className=''>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <img src={patner} alt="Partner logo" className="w-full h-auto object-contain" />
            <img src={patner} alt="Partner logo" className="w-full h-auto object-contain" />
            <img src={patner} alt="Partner logo" className="w-full h-auto object-contain" />
            <img src={patner} alt="Partner logo" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWithCard;
