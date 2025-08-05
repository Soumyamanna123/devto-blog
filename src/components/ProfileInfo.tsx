import React from "react";

interface ProfileInfoProps {
  user: string;
  onLogout: () => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user, onLogout }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">{user}</h2>
      <div className="text-gray-600 dark:text-gray-300 mb-4">
        <p>
          Email: <span className="italic">user@email.com</span>
        </p>
        <p>
          Member since: <span className="italic">July 2025</span>
        </p>
      </div>
      <button
        onClick={onLogout}
        className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded-full transition"
      >
        Logout
      </button>
    </>
  );
};

export default ProfileInfo;
