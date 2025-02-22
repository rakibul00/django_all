import React from 'react';

const TextBlock2 = () => {
    return (
        <div className="p-5">
            <div className="bg-black mb-20 mt-10 max-w-[1400px] mx-auto rounded-2xl flex flex-col md:flex-row items-center justify-between p-5 md:p-8">
                <div className="cta-content text-white mb-5 md:mb-0">
                    <h2 className="md:text-2xl font-semibold">আমাদের কোর্স সম্পর্কে বিস্তারিত জানতে আমাদের সাথে করুন</h2>
                    <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur, excepturi!</p>
                </div>
                <div className="cta-button">
                    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-gradient-to-l transition duration-300">
                        +880 1700962537
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextBlock2;
