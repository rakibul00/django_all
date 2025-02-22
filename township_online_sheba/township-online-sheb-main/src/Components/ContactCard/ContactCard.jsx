import React from 'react';

const ContactCard = () => {
  return (
    <div className=" max-w-[1400px] mx-auto flex flex-col md:gap-72 lg:flex-row mt-5 mb-5 bg-[#FCFCF5] shadow-lg rounded-lg p-6 space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Google Map Section */}
      <div className="w-full lg:w-1/2">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.808728396375!2d89.55645707498047!3d22.8456411344437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01e5047f916aaf%3A0x5b7d6e8a0c66d817!2sKhulna!5e0!3m2!1sen!2sbd!4v1696530212345!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Office Information Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl font-bold text-red-500 mb-2">
          Head Office [Main Campus, Khulna]
        </h2>
        <p className="text-gray-700">
          Example Plaza (3rd Floor)<br />
          Opposite of Khulna City Hospital<br />
          House#9, Road#3, Khulna 9100, Bangladesh
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
          <ul className="text-gray-700">
            <li>+880 1999999999</li>
            <li>+880 1888888888</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">E-Mail</h3>
          <p className="text-gray-700">info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
