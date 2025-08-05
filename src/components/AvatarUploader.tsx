import React, { useRef, useState } from "react";
import { FiCamera } from "react-icons/fi";

interface AvatarUploaderProps {
  avatar: string | null;
  setAvatar: (url: string) => void;
  user: string;
}

const AvatarUploader: React.FC<AvatarUploaderProps> = ({
  avatar,
  setAvatar,
  user,
}) => {
  const [hovered, setHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const firstLetter = user.charAt(0).toUpperCase();

  const handleAvatarClick = () => fileInputRef.current?.click();

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

  return (
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
  );
};

export default AvatarUploader;
