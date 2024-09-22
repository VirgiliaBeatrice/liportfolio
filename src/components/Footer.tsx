import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center h-full">
          <div className="w-full md:w-auto">
            <span className="text-sm text-gray-600">© 2024 Haoyan.Li. All rights reserved.</span>
            <span className="text-sm text-gray-600">  </span>
            <span className="text-sm text-gray-600 mt-2">
              Hosted on{' '}
              <Link href="https://vercel.com" className="text-blue-600 hover:underline">
                Vercel
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;