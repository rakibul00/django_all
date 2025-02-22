import React from 'react';

const HeaderSection = () => {
  return (
    <header className="bg-orange-500">
      {/* Top section with contact info */}
      <div className="flex justify-between items-center py-2 px-4 text-white">
        <div className="flex space-x-4">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l7-7m0 0l7 7M10 3v18"></path></svg>
            +880 1700962537
          </span>
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12V8a4 4 0 00-8 0v4"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9"></path></svg>
            learn.futureit@gmail.com
          </span>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-200">🌐 Facebook</a>
          <a href="https://youtube.com" className="hover:text-gray-200">🌐 YouTube</a>
          <a href="https://linkedin.com" className="hover:text-gray-200">🌐 LinkedIn</a>
          <a href="https://instagram.com" className="hover:text-gray-200">🌐 Instagram</a>
          <a href="https://tiktok.com" className="hover:text-gray-200">🌐 TikTok</a>
        </div>
      </div>

    </header>
  );
}

export default HeaderSection;
