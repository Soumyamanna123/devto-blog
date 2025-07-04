import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FaSearch } from "react-icons/fa";
import LoginDialog from "./LoginDialog";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  // Handle login
  const handleLogin = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username);
  };

  const firstLetter = user ? user.charAt(0).toUpperCase() : "?";

  return (
    <nav className="p-4 sticky top-0 z-50 bg-white shadow transition-colors duration-300">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            DEV.to Blog
          </Link>

          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
          </div>

          {/* User/Profile or Login Button */}
          <div>
            {user ? (
              <button
                onClick={() => navigate("/profile")}
                className=" h-12 w-12 bg-gray-200  text-blue-600  text-xl xl:text-2xl rounded-full font-semibold hover:bg-gray-300  transition cursor-pointer"
              >
                {firstLetter}
              </button>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="ml-4 px-6 py-1 border border-blue-600 text-blue-600 rounded-full cursor-pointer"
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
