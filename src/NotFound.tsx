import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <img
      src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flahmi1d9ix2aqdmo4f3f.gif"
      alt="404 Not Found"
      className="mb-6 max-w-xs md:max-w-md rounded-xl"
    />
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="text-blue-600 underline">
      Go Home
    </Link>
  </div>
);

export default NotFound;