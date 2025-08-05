import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { useAuth } from "../context/useAuth";
import { useFollow } from "../context/FollowContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AvatarUploader from "../components/AvatarUploader";
import ProfileInfo from "../components/ProfileInfo";
import FollowingAuthors from "../components/FolllowingAuthor";
import BookmarkedPosts from "../components/BookMarkedPost";

const Profile = () => {
  const { user, setUser } = useAuth();
  const { following } = useFollow();
  const [avatar, setAvatar] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("avatar");
    if (saved) setAvatar(saved);
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    navigate("/");
    toast.success("Logged out successfully");
  };

  if (!user) {
    return <p className="text-center py-10">You must be logged in.</p>;
  }

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center py-10">
        <AvatarUploader avatar={avatar} setAvatar={setAvatar} user={user} />
        <ProfileInfo user={user} onLogout={handleLogout} />
        <FollowingAuthors authors={following} />
        <BookmarkedPosts />
      </div>
    </MaxWidthWrapper>
  );
};

export default Profile;
