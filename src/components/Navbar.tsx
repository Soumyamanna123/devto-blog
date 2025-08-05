import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FaBookmark, FaMoon, FaSearch, FaSun } from "react-icons/fa";
import LoginDialog from "./LoginDialog";
import { useAuth } from "../context/useAuth";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username);
  };

  const firstLetter = user ? user.charAt(0).toUpperCase() : "?";

  const bookmark = useSelector((store: any) => store.bookmark.items);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 sticky top-0 z-50 bg-white dark:bg-gray-900 shadow transition-colors duration-300">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            DEV.to Blog
          </Link>

          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Bookmark Icon */}
          <div className="relative">
            <Link to="/profile">
              <FaBookmark className="text-blue-600 dark:text-blue-400 text-xl hover:text-blue-800 dark:hover:text-blue-300" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {bookmark.length}
              </span>
            </Link>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="ml-4 cursor-pointer text-gray-700 dark:text-gray-300">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Profile or Login */}
          <div>
            {user ? (
              <button
                onClick={() => navigate("/profile")}
                className="h-12 w-12 bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-white text-xl xl:text-2xl rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer"
              >
                {firstLetter}
              </button>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="ml-4 px-6 py-1 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 rounded-full cursor-pointer"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>

      <LoginDialog
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLogin={handleLogin}
      />
    </nav>
  );
};

export default Navbar;
