import React from 'react';
import MegaMenu from './MegaMenu';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className='w-72' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64804f295294d986354397af_logo%20animation1%20updated1.gif" alt="" />
            <div className="ml-10 flex items-baseline space-x-5">
              <a href="#" className="text-gray-500 hover:text-gray-800">Work</a>
              <MegaMenu />
              <a href="#" className="text-gray-500 hover:text-gray-800">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-800">Resources</a>
              <a href="#" className="text-gray-500 hover:text-gray-800">Careers</a>
            </div>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-md">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

