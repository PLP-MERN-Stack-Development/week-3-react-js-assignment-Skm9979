import React from 'react';

const Navbar = () => (
  <nav className="bg-blue-600 dark:bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
    <div className="font-bold text-xl">Skea</div>
    <div className="space-x-4">
      {/* Add navigation links here */}
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">Tasks</a>
      <a href="#" className="hover:underline">API Data</a>
    </div>
  </nav>
);

export default Navbar; 