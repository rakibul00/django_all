import React from 'react';

function TextBlock1({ title, description }) {
    return (
        <div className="p-5 w-full">
            <div className="bg-black mb-5 mt-5 max-w-[1400px] mx-auto rounded-2xl flex flex-col md:flex-row items-center justify-between px-5 md:px-11 p-6">
                <div className="cta-content text-white">
                    <h2 className=" md:text-xl font-bold">{title || 'আমাদের কোর্স সম্পর্কে বিস্তারিত জানতে আমাদের সাথে করুন'}</h2>
                    <p className="mt-2 text-sm md:text-base">{description || 'Lorem ipsum dolor sit amet consectetur, excepturi!'}</p>
                </div>
                <div className="cta-button mt-4 md:mt-0">
                    <button className="bg-gradient-to-r from-[#ff6200] to-[#ff8c00] text-white py-2 px-4 rounded-md transition duration-200 hover:bg-gradient-to-r hover:from-[#ff8c00] hover:to-[#ff6200]">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TextBlock1;
