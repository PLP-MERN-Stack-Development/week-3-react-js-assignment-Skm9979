import React from 'react';

const Footer = () => (
  <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 px-4 mt-8 text-center rounded-t-lg">
    <div className="mb-2">
      &copy; {new Date().getFullYear()} Skea. All rights reserved.
    </div>
    <div className="space-x-4">
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Terms of Service</a>
    </div>
  </footer>
);

export default Footer; 