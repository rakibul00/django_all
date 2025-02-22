import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    text: "Township Online Seba offers exceptional service, fostering a supportive community and consistently delivering user-friendly solutions tailored to modern needs.",
    author: "Ishtiak Ahmed",
    position: "React.js Developer",
    company: "Dokaami Private Limited",
    img: "https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/412285399_804278565045439_6909440542137519216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH8cdiu3En71bk1h0Yo3Pm4K4b5_u2-QZorhvn-7b5BmgTV6dURh8nmO6THgbvdPdSh6m42fNKrmv48Rn7LbRrd&_nc_ohc=M0bOOTvzsMoQ7kNvgFRTgE9&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=ACBmv8OSQp0i6uCUpfFYPxL&oh=00_AYBjrVX4nv7MdilPTd313iyp6Rmz0DKaOWIh4UQdbSr9GQ&oe=6723E4F3", // replace with actual image path
  },
  {
    id: 2,
    text: "Township Online Seba offers exceptional service, fostering a supportive community and consistently delivering user-friendly solutions tailored to modern needs.",
    author: "Md. Jihad Hasan",
    position: "Full Stack Developer",
    company: "Experiments Labs",
    img: "https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/412285399_804278565045439_6909440542137519216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH8cdiu3En71bk1h0Yo3Pm4K4b5_u2-QZorhvn-7b5BmgTV6dURh8nmO6THgbvdPdSh6m42fNKrmv48Rn7LbRrd&_nc_ohc=M0bOOTvzsMoQ7kNvgFRTgE9&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=ACBmv8OSQp0i6uCUpfFYPxL&oh=00_AYBjrVX4nv7MdilPTd313iyp6Rmz0DKaOWIh4UQdbSr9GQ&oe=6723E4F3",
  },
  {
    id: 3,
    text: "Township Online Seba offers exceptional service, fostering a supportive community and consistently delivering user-friendly solutions tailored to modern needs.",
    author: "Saiful Islam",
    position: "React.js Developer",
    company: "Quad Theory",
    img: "https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/412285399_804278565045439_6909440542137519216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH8cdiu3En71bk1h0Yo3Pm4K4b5_u2-QZorhvn-7b5BmgTV6dURh8nmO6THgbvdPdSh6m42fNKrmv48Rn7LbRrd&_nc_ohc=M0bOOTvzsMoQ7kNvgFRTgE9&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=ACBmv8OSQp0i6uCUpfFYPxL&oh=00_AYBjrVX4nv7MdilPTd313iyp6Rmz0DKaOWIh4UQdbSr9GQ&oe=6723E4F3",
  },
  {
    id: 4,
    text: "Township Online Seba offers exceptional service, fostering a supportive community and consistently delivering user-friendly solutions tailored to modern needs.",
    author: "Isteak Ahmmed",
    position: "Front End Developer",
    company: "Laralink Limited",
    img: "https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/412285399_804278565045439_6909440542137519216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH8cdiu3En71bk1h0Yo3Pm4K4b5_u2-QZorhvn-7b5BmgTV6dURh8nmO6THgbvdPdSh6m42fNKrmv48Rn7LbRrd&_nc_ohc=M0bOOTvzsMoQ7kNvgFRTgE9&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=ACBmv8OSQp0i6uCUpfFYPxL&oh=00_AYBjrVX4nv7MdilPTd313iyp6Rmz0DKaOWIh4UQdbSr9GQ&oe=6723E4F3",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-xl text-black shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center">
        <img src={testimonial.img} alt={testimonial.author} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <p className="font-bold">{testimonial.author}</p>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-xl mt-4 font-semibold text-justify">{testimonial.text.substring(0, 100)}</p>
      </div>
    </div>
  );
};

const SuccessStorySection = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,             // Enable auto-slide
    autoplaySpeed: 3000,        // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-6 bg-[#f8f8f8] max-w-[1400px] mx-auto rounded-md">
      <div className="container mx-auto px-4 text-center">
        <h2 className="md:text-5xl text-xl font-bold text-black md:mb-9 mb-2">
          What Our Users Say
        </h2>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStorySection;
