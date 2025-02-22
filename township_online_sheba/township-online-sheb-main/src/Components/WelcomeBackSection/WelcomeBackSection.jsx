import React from "react";

const WelcomeBackSection = () => {
  return (
    <div className="min-h-screen bg-orange-200 flex items-center justify-center">
      {/* Container for desktop and mobile mockups */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Mobile mockup */}
        <div className="relative w-80 h-[600px] lg:w-1/3 lg:h-auto bg-white rounded-lg shadow-xl mb-8 lg:mb-0">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            {/* Replace with your character image URL */}
            <img
              src="https://example.com/character1.png"
              alt="Character Illustration"
              className="h-32"
            />
          </div>
          <div className="p-6 mt-20">
            <h2 className="text-orange-600 text-2xl font-bold mb-4">
              Welcome Back!
            </h2>
            <p className="text-gray-600 mb-4">
              Sign in to access content, features, and more
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <button className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition duration-200">
                Get Started
              </button>
            </form>
          </div>
        </div>

        {/* Desktop form mockup */}
        <div className="relative w-[500px] h-auto lg:w-1/3 bg-white rounded-lg shadow-xl p-8">
          <div className="absolute top-0 left-0">
            {/* Replace with your character image URL */}
            <img
              src="https://example.com/character2.png"
              alt="Character Illustration"
              className="h-32"
            />
          </div>
          <h2 className="text-orange-600 text-3xl font-bold mb-4">
            Welcome Back!
          </h2>
          <p className="text-gray-600 mb-4">
            Sign in to access content, features, and more
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-4 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-4 border rounded-lg"
              />
            </div>
            <button className="w-full bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition duration-200">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBackSection;
