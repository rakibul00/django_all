import React from 'react';
import logo from '../../assets/mobile.png';
import Stat from '../Stat/Stat';

const AppImage3 = () => {
    return (
        <div className="max-w-[1400px] mx-auto rounded-lg p-5">
            <div>
                <div className="hero bg-[#F5F5F5] rounded-lg shadow-md">
                    <div className="hero-content flex flex-col lg:flex-row items-center">
                        <img
                            src={logo}
                            alt="Township Logo"
                            className=" rounded-lg mb-5 lg:mb-0 lg:mr-5 h-96"
                        />
                        <img
                            src={logo}
                            alt="Township Logo"
                            className=" rounded-lg mb-5 lg:mb-0 lg:mr-5 -ml-5 w-64"
                        />
                        <div className="text-left w-full lg:w-2/3">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">টাউনশীপ অনলাইন সেবা</h1>
                            <p className="py-4 text-sm md:text-base">
                                ইউনিয়ন পরিষদ সেবা, ডাক্তার, হাসপাতাল, এম্বুলেন্স, ফায়ার সার্ভিস, শিক্ষা প্রতিষ্ঠান, বিদুৎ, থানা-পুলিশ, সাংবাদিক, আইনিজীবি, উদ্যোক্তা, ইত্যাদি।
                                আরাইহাজার উপজেলার সকল সেবা পাবেন এখন অনলাইনে ঘরে বসে, আমাদের এই অ্যাপস ব্যবহার করে আপনি যে কোনো জরুরি সেবা পেতে পারেন মুহূর্তের মধ্যে। অ্যাপটি ব্যবহার করার জন্য এই পেজের উপরের Download Now বাটনে টাচ বা ক্লিক করে এ্যাপসটি ইন্সটল করতে হবে। আর হ্যা এই অ্যাপে আপনার জরুরি কোনা সেবা যুক্ত করতে চাইলে আমাদের সাথে যোগযোগ করে আপনার তথ্য দিন আমার যুক্ত করে দিব।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-9 text-center'>
                <h1 className='text-4xl text-blue-500 font-bold'>আপনার এলাকায় প্রয়োজনীয় সব সেবা ও তথ্য এক জায়গায়</h1>
                <p className='text-xl mt-4'>আড়াইহাজার এলাকার সমস্ত সেবা ও তথ্য আপনার হাতের মুঠোয়। স্বাস্থ্য,  </p>
                <p className='text-xl'> শিক্ষা, এবং জরুরি যোগাযোগসহ বিভিন্ন বিষয়ের সম্পূর্ণ তথ্য এখানে সহজেই </p>
                <p className='text-xl'>খুঁজে পাবেন। এক জায়গায় সবকিছু পাওয়ার সুবিধা উপভোগ করুন।</p>
            </div>
            <div className='text-center mt-11'>
                <Stat />
            </div>
        </div>
    );
};

export default AppImage3;
