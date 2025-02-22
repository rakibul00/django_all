import React from 'react';

const Notice = () => {
    return (
        <div className='max-w-[1400px] mx-auto px-2'>
            <div className=" bg-base-200  mt-5 md:rounded-lg">
                <div className="flex items-center justify-between">
                    <h1 className='p-3 md:text-2xl text-white bg-red-600 font-bold rounded-l-lg'>নোটিশ</h1>
                    <div>
                    </div>
                   <marquee className="text-xl text-black ">This text will scroll from right to left</marquee>
                </div>
            </div>
        </div>
    );
};

export default Notice;