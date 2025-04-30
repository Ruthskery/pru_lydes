import React from 'react';
import { SunMedium, Moon } from 'lucide-react';
import { useDarkMode } from '@/context/themeContext'; // Import the hook!

function DarkmodeToggle() {
  const { darkMode, setDarkMode } = useDarkMode(); // Get darkMode and setDarkMode from context

  const toggleTheme = () => {
    setDarkMode(!darkMode); // Toggle the dark mode
  };

  return (
    <button
    onClick={toggleTheme}
    className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all relative"
  >
    <div
      className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out
        ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
    >
      <div className="flex items-center justify-center h-full">
        {darkMode ? <SunMedium size={16} className="text-yellow-500" /> : <Moon size={16} className="text-gray-700" />}
      </div>
    </div>
  </button>
  
  );
}

export default DarkmodeToggle;
