import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { CiLocationOn } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false); // State to manage popup visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_pn3hrzh', // Replace with your EmailJS service ID
            'template_5r52pp6', // Replace with your EmailJS template ID
            formData, // Form data to be sent
            '8sNNftXV7o4bSOiSC' // Replace with your EmailJS user ID
        )
        .then((result) => {
            setIsSubmitted(true); // Show popup on successful submission
            setTimeout(() => setIsSubmitted(false), 3000); // Hide popup after 3 seconds
        })
        .catch((error) => {
            alert('Failed to send the message, please try again.');
            console.log(error.text);
        });

        // Clear the form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="p-4 md:p-8 bg-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6 lg:px-24 px-6 md:py-28 items-center">
                    <div className='md:flex items-center gap-4'>
                        <div className='text-4xl bg-orange-400 text-white rounded-md p-2'>
                        <FaPhoneAlt />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-">Phone Number:</h3>
                            <p>+880 1700962537 </p>
                        </div>
                    </div>
                    {/* Add more locations or contacts here */}
                    <div className='md:flex items-center gap-4'>
                        <div className='text-4xl bg-orange-400 text-white rounded-md p-2'>
                        <IoMdMail />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Email:</h3>
                            <p>townshiponlineseba@gmail.com </p>
                        </div>
                    </div>
                    <div className='md:flex items-center gap-4'>
                        <div className='text-4xl bg-orange-400 text-white rounded-md p-2'>
                        <FaLocationDot />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Location:</h3>
                            <p>Khulna GPO, 9000, Khulna</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white shadow-lg rounded-lg p-6 lg:mr-24">
                    <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-gray-300 rounded-lg p-2"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-lg p-2"
                                placeholder="Your email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Message</label>
                            <textarea
                                name="message"
                                className="w-full border border-gray-300 rounded-lg p-2"
                                placeholder="Write your message..."
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Popup for successful submission */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                        <p className="text-gray-700 mb-4">Thank you for reaching out. We'll get back to you soon.</p>
                        <button
                            className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                            onClick={() => setIsSubmitted(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
