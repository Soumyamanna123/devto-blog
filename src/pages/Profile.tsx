import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { useAuth } from "../context/useAuth";
import { FiCamera } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import FollowingAuthorCard from "../components/FollwingAuthorCard";
import { useFollow } from "../context/FollowContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, setUser } = useAuth();

  const { following } = useFollow();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Get first letter for avatar
  const firstLetter = user ? user.charAt(0).toUpperCase() : "?";

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  // ...existing code...
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setAvatar(dataUrl);
        localStorage.setItem("avatar", dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  // ...existing code...

  // On mount:
  useEffect(() => {
    const saved = localStorage.getItem("avatar");
    if (saved) setAvatar(saved);
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    navigate("/");
    toast("Logout Successfully " + user);
  };

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center py-10">
        {/* Profile Avatar with upload on hover */}
        <div
          className="relative w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold mb-4 shadow-lg cursor-pointer group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleAvatarClick}
        >
          {avatar ? (
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            firstLetter
          )}
          {hovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full transition">
              <FiCamera className="text-3xl text-white" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {/* Username */}
        <h2 className="text-2xl font-bold mb-2">{user}</h2>
        {/* Other details (add more as needed) */}
        <div className="text-gray-600 dark:text-gray-300 mb-4">
          <p>
            Email: <span className="italic">user@email.com</span>
          </p>
          <p>
            Member since: <span className="italic">July 2025</span>
          </p>
        </div>
        {/* Add more profile details or actions here */}
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
        <div className="w-full mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Authors You Follow
          </h3>

          {following.length === 0 ? (
            <p className="text-gray-500 italic">
              You're not following any authors yet. Start exploring and follow
              your favorites!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {following.map((author) => (
                <FollowingAuthorCard
                  key={author.username}
                  username={author.username}
                  name={author.name}
                  profileImage={author.profileImage}
                  summary={author.summary}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Profile;
