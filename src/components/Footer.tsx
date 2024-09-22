import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center h-full">
          <div className="w-full md:w-auto">
            <p className="text-sm text-gray-600">© 2024 Haoyan.Li. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;