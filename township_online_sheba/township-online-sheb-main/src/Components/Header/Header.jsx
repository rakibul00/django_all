import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import AppImage from '../AppImage/AppImage';
import TextBlock from '../TextBlock/TextBlock';
import ContactCard from '../ContactCard/ContactCard';
import ImageSlider from '../ImageSlider/ImageSlider';
import TextBlock1 from '../TextBlock1/TextBlock1';
import TextBlock2 from '../TextBlock2/TextBlock2';
import Notice from '../Notice/Notice';
import MediaCoverage from '../MediaCoverage/MediaCoverage';
import SectionWithCard from '../SectionWithCard/SectionWithCard';
import SuccessStorySection from '../SuccessStorySection/SuccessStorySection';

const Header = () => {
  return (
    <div>
    <div>
    <ImageSlider></ImageSlider>
            <Notice></Notice>
            <AppImage></AppImage>
            <SectionWithCard></SectionWithCard>
            <TextBlock1></TextBlock1>
            <TextBlock></TextBlock>
            {/* <TestimonialSection></TestimonialSection> */}
            <SuccessStorySection />
            <TextBlock2></TextBlock2>
            <MediaCoverage></MediaCoverage>
            <ContactCard></ContactCard>
    </div>
    </div>
  );
};

export default Header;

