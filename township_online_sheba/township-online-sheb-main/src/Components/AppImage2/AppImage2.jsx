import React from 'react';
import logo from '../../assets/appimg.png';
import { Link } from 'react-router-dom';

const AppImage2 = () => {
    return (
        <div className="max-w-[1400px] mx-auto rounded-lg p-5">
            <div className="hero bg-[#F5F5F5] rounded-lg shadow-md">
                <div className="hero-content flex flex-col lg:flex-row items-center">
                    <img
                        src={logo}
                        alt="Township Logo"
                        className=" rounded-lg mb-5 lg:mb-0 lg:mr-5"
                    />
                    <div className="text-left w-full lg:w-2/3">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">টাউনশীপ অনলাইন সেবা </h1>
                        <p className="py-4 text-sm md:text-base">
                            ইউনিয়ন পরিষদ সেবা, ডাক্তার, হাসপাতাল, এম্বুলেন্স, ফায়ার সার্ভিস, শিক্ষা প্রতিষ্ঠান, বিদুৎ, থানা-পুলিশ, সাংবাদিক, আইনিজীবি, উদ্যোক্তা, ইত্যাদি।
                            আরাইহাজার উপজেলার সকল সেবা পাবেন এখন অনলাইনে ঘরে বসে, আমাদের এই অ্যাপস ব্যবহার করে আপনি যে কোনো জরুরি সেবা পেতে পারেন মুহূর্তের মধ্যে। অ্যাপটি ব্যবহার করার জন্য এই পেজের উপরের Download Now বাটনে টাচ বা ক্লিক করে এ্যাপসটি ইন্সটল করতে হবে। আর হ্যা এই অ্যাপে আপনার জরুরি কোনা সেবা যুক্ত করতে চাইলে আমাদের সাথে যোগযোগ করে আপনার তথ্য দিন আমার যুক্ত করে দিব।
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row">
                            <Link to='/about'><button className="btn bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition duration-200 w-full sm:w-auto">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppImage2;
