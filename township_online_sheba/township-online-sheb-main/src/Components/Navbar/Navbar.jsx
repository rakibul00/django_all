import React, { useState, useEffect } from 'react';
import logos from '../../assets/Township.png';
import { Link } from 'react-router-dom';
import { IoMdTime } from 'react-icons/io';
import { TiWeatherCloudy } from 'react-icons/ti';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [weather, setWeather] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      setCurrentTime(time);
    };

    const intervalId = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(intervalId);
  }, []);

  // Simulating weather data (you can integrate any weather API)
  useEffect(() => {
    setWeather('Sunny 25°C (Satkhira)');
  }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{ backgroundColor: '#F5F5F7' }} className="text-black mb-5">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-[12px]">
        {/* Logo with responsive size */}
        <div>
          <Link to='/'>
          <img 
            src={logos} 
            alt="Logo"  
          />
          </Link>
        </div>

        {/* Time and Weather for Desktop */}
        <div className="hidden md:flex space-x-6 text-xl font-bold items-center">
          <div className="flex items-center">
          <IoMdTime className='text-2xl mr-2' />
            {currentTime}
          </div>
          <div className="flex items-center">
          <TiWeatherCloudy className='text-2xl mr-2'/>
            {weather}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul className={`md:flex space-x-5 items-center ${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
        <Link to='/about'><li><a href="/" className="hover:text-orange-500 text-xs md:text-[14px]">আমাদের সম্পর্কে</a></li></Link>
        <Link to='/app'> <li><a href="" className="hover:text-orange-500 text-xs md:text-[14px] ">অ্যাপ</a></li></Link>
        <Link to='/contacts'> <li><a href="" className="hover:text-orange-500 text-xs md:text-[14px] mr-5">যোগাযোগ</a></li></Link>
        </ul>
      </div>

      {/* Mobile time and weather */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4">
          <div className="flex justify-around items-center">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12h4"></path>
              </svg>
              {currentTime}
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0a9 9 0 0112 0m0 0l2 2m-2 2a9 9 0 01-12 0m12 0l-2 2m-8-4h12"></path>
              </svg>
              {weather}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
