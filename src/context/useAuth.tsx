import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
  bookmarks: string[];
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));
  const [bookmarks, setBookmarks] = useState<string[]>(
    JSON.parse(localStorage.getItem("bookmarks") || "[]")
  );

  const addBookmark = (id: string) => {
    if (!bookmarks.includes(id)) {
      const updated = [...bookmarks, id];
      setBookmarks(updated);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
    }
  };

  const removeBookmark = (id: string) => {
    const updated = bookmarks.filter((b) => b !== id);
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        bookmarks,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
