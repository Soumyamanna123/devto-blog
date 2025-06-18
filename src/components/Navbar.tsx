// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <nav className="p-4 shadow flex justify-between items-center bg-white">
      <MaxWidthWrapper>
        <Link to="/" className="text-xl font-bold text-blue-600">
          DEV.to Blog
        </Link>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
