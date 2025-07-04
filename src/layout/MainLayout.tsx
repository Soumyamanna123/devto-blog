// src/layouts/MainLayout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      <main className="flex-grow p-4 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
