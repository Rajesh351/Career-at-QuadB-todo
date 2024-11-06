import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch, FaTh, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark'); // Toggle dark mode class on the root element
    localStorage.setItem('darkMode', !darkMode); // Save the preference in localStorage
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark'); // Enable dark mode on page load
    }
  }, []);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <FaBars className="text-gray-600 dark:text-gray-300 text-lg cursor-pointer" />
        <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">DoIt</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 dark:text-gray-300 text-lg cursor-pointer" />
        <FaTh className="text-gray-600 dark:text-gray-300 text-lg cursor-pointer" />
        <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 text-lg cursor-pointer">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
