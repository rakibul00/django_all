import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ImageSlider from '../ImageSlider/ImageSlider';
import Notice from '../Notice/Notice';
import SectionWithCard from '../SectionWithCard/SectionWithCard';
import TextBlock1 from '../TextBlock1/TextBlock1';
import AppImage from '../AppImage/AppImage';
import TextBlock from '../TextBlock/TextBlock';
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import TextBlock2 from '../TextBlock2/TextBlock2';
import MediaCoverage from '../MediaCoverage/MediaCoverage';
import ContactCard from '../ContactCard/ContactCard';
import Footer from '../Footer/Footer';
import { MdCall, MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Home = () => {
    return (
        <div>
                   <header className="bg-[#F49401] hidden md:block">  {/* Hidden on small devices */}
      {/* Top section with contact info */}
      <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4 md:px-12 text-white">
        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <span className="flex items-center gap-2">
            <MdCall className="text-2xl" />
            +880 1700962537
          </span>
          <span className="flex items-center">
          <MdEmail className='mr-2 text-2xl' />
            townshiponlineseba@gmail.com
          </span>
        </div>

        {/* Social Media Links Section */}
        <div className="flex space-x-4 text-xl md:text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="rounded-full text-white hover:text-blue-600 transition-colors duration-200" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-white hover:text-pink-600 transition-colors duration-200" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-white hover:text-blue-700 transition-colors duration-200" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-white hover:text-blue-400 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </header>
             <Navbar></Navbar>
             <div>
             <Outlet></Outlet>
             <Footer></Footer>

             </div>

        </div>
    );
};

export default Home;