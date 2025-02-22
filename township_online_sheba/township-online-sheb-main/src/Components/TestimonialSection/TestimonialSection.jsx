import React from 'react';

const testimonials = [
    {
        image: 'https://example.com/image1.jpg',
        name: 'SHEIKH SHAADI',
        text: 'Sadi testimonial text can go here. He was very happy with the service and had a great experience.',
    },
    {
        image: 'https://example.com/image2.jpg',
        name: 'John Doe',
        text: "John's testimonial text can go here. He was very happy with the service.",
    },
    {
        image: 'https://example.com/image3.jpg',
        name: 'Jane Smith',
        text: "Jane's feedback. She loved the design and appreciates the attention to detail.",
    },
    {
        image: 'https://example.com/image4.jpg',
        name: 'Mark Anthony',
        text: "Mark found the marketing strategies effective and the team responsive to feedback.",
    },
];

const TestimonialGrid = () => {
    return (
        <div className="md:mt-1 mt-5 bg-gradient-to-r from-gray-100 to-gray-300 py-10">
            <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">What Our Users Say</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-4">
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full border-2 border-orange-500 mx-auto mb-4"
                        />
                        <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-700 text-base mt-2">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialGrid;
