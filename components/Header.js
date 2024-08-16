// components/Header.js
export default function Header({ darkMode, toggleDarkMode }) {
    return (
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md">
        {/* Logo */}
        <div className="w-1/4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Airbnb</h1>
        </div>
  
        {/* Search Bar */}
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-airbnbRed dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
        </div>
  
        {/* Theme Switcher */}
        <div className="w-1/4 flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25M12 18.75V21m6.364-15.364l-1.591 1.591M6.227 17.773l-1.591 1.591M21 12h-2.25M3 12H.75m15.364 6.364l-1.591-1.591M6.227 6.227l-1.591-1.591"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0112.003 21c-5.385 0-9.75-4.365-9.75-9.75 0-4.754 3.336-8.725 7.751-9.692a.75.75 0 01.958.72v1.406c0 .412-.331.75-.743.75-3.708 0-6.75 3.043-6.75 6.75s3.042 6.75 6.75 6.75c3.222 0 5.9-2.23 6.604-5.242a.75.75 0 01.73-.608h1.45a.75.75 0 01.72.958z"
                />
              </svg>
            )}
          </button>
        </div>
      </header>
    );
  }
  