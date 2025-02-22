import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const AppImage = () => {
    return (
        <div className="max-w-[1400px] mx-auto rounded-lg p-5">
            <div className="hero bg-[#F5F5F5] rounded-lg shadow-md">
                <div className="hero-content flex flex-col lg:flex-row items-center">
                    <img
                        src={logo}
                        alt="Township Logo"
                        className="max-w-[50%] sm:max-w-md rounded-lg mb-5 lg:mb-0 lg:mr-5 md:w-[280px] md:h-72"
                    />
                    <div className="text-left w-full lg:w-2/3">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">About Township Online Seba</h1>
                        <p className="py-4 text-sm md:text-base">
                            Township is an engaging and popular online game that blends elements of city-building and farming into a seamless experience. Developed by Playrix, the game allows players to build their own town, manage resources, and engage in farming activities, <br /> all while fostering a sense of community and teamwork. The game has gained immense popularity across different platforms, including mobile devices and desktops.
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row">
                            <Link to='/about'>                            <button className="btn bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition duration-200 w-full sm:w-auto">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppImage;
