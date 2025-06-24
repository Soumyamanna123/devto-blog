// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="p-4 sticky top-0 z-50 bg-white  shadow ">
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
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
