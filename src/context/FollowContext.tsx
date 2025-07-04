import React, { createContext, useContext, useState } from "react";
import type { FollowingAuthorCardProps } from "../types/post";
import toast from "react-hot-toast";

type FollowContextType = {
  following: FollowingAuthorCardProps[];
  followAuthor: (author: FollowingAuthorCardProps) => void;
  unfollowAuthor: (username: string) => void;
};

const FollowContext = createContext<FollowContextType | undefined>(undefined);

export const FollowProvider = ({ children }: { children: React.ReactNode }) => {
  const [following, setFollowing] = useState<FollowingAuthorCardProps[]>(
    JSON.parse(localStorage.getItem("following") || "[]")
  );

  const followAuthor = (author: FollowingAuthorCardProps) => {
    if (!following.some((a) => a.username === author.username)) {
      const updated = [...following, author];
      setFollowing(updated);
      localStorage.setItem("following", JSON.stringify(updated));
    }
    toast.success(`Now following ${author.name}`);
  };

  const unfollowAuthor = (username: string) => {
    const updated = following.filter((a) => a.username !== username);
    setFollowing(updated);
    localStorage.setItem("following", JSON.stringify(updated));
    toast("Unfollowed " + username);
  };

  return (
    <FollowContext.Provider value={{ following, followAuthor, unfollowAuthor }}>
      {children}
    </FollowContext.Provider>
  );
};

export const useFollow = () => {
  const context = useContext(FollowContext);
  if (!context) throw new Error("useFollow must be used within FollowProvider");
  return context;
};
