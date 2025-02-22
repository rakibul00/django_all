import logo from '../../assets/seminer.webp';
import newMissionLogo from '../../assets/newMissionLogo.png';
import newVisionLogo from '../../assets/newVisionLogo.png';
import newMotiveLogo from '../../assets/newMotiveLogo.png';
import ImageSlider from '../ImageSlider/ImageSlider';


const About = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className="max-w-[1400px] mx-auto rounded-lg p-5">
                <div className="hero rounded-lg shadow-md">
                    <div className="hero-content flex flex-col lg:flex-row items-center">
                        <img
                            src={logo}
                            alt="Township Logo"
                            className="max-w-[100%] sm:max-w-md rounded-lg mb-5 lg:mb-0 lg:mr-5"
                        />
                        <div className="text-left w-full lg:w-2/3">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Message from Managing Director</h1>
                            <p className="py-4 text-sm md:text-base">
                                At Township Online Seba, we harness the transformative power of technology to bridge the gap between individuals and essential services. Established in 2021, our mission is to provide a seamless online experience that enhances accessibility and convenience for our users.

                                We are dedicated to delivering high-quality services that empower our community and support personal and professional growth. With a commitment to innovation and user satisfaction, we strive to be the leading online service provider in the region.

                                Join us in simplifying your everyday tasks and enhancing your quality of life through our comprehensive range of services!                        </p>

                        </div>
                    </div>
                </div>
                <div className='mt-11'>
                    <h1 className='text-3xl font-bold font-serif'>About Us</h1>
                    <p className='text-xs font-serif mt-1'>Welcome to Township Online Seba, your trusted partner in digital education and skills development. Since our establishment, we have been dedicated to bridging the gap between traditional education and the dynamic demands of the online world. We offer a comprehensive range of IT and soft skills training designed to empower individuals and communities alike.

                        Our mission is to provide accessible and high-quality education that prepares learners for success in the ever-evolving digital landscape. Through innovative teaching methods and a commitment to excellence, we strive to nurture talent and inspire growth.

                        Join us at Township Online Seba, where your journey toward digital empowerment begins!</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mt-12'>
                    <div className='bg-gradient-to-r from-[#EEF5FF] to-[#DBEAFE] text-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
                        <img src={newMissionLogo} alt="Mission Logo" className='h-20 w-20 mx-auto mb-4' />
                        <h2 className='text-lg font-semibold text-blue-600'>Mission</h2>
                        <p className='text-gray-700'>
                            We aim to bridge the gap between education and industry by delivering high-quality, industry-relevant training programs that equip learners with the practical skills
                        </p>
                    </div>

                    <div className='bg-gradient-to-r from-[#EFFDF3] to-[#DDFCE7] text-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
                        <img src={newVisionLogo} alt="Vision Logo" className='h-20 w-20 mx-auto mb-4' />
                        <h2 className='text-lg font-semibold text-green-600'>Vision</h2>
                        <p className='text-gray-700'>
                            We strive to create a supportive learning environment that fosters creativity, critical thinking, and collaboration, enabling our learners to excel in their professional journeys.
                        </p>
                    </div>

                    <div className='bg-gradient-to-r from-[#FEF2F2] to-[#FEE3E3] text-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
                        <img src={newMotiveLogo} alt="Motive Logo" className='h-20 w-20 mx-auto mb-4' />
                        <h2 className='text-lg font-semibold text-red-600'>Motive</h2>
                        <p className='text-gray-700'>
                            We are committed to continuous improvement, adapting our programs to meet the evolving demands of the industry and the needs of our learners. and expertise necessary for success in their chosen fields.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;