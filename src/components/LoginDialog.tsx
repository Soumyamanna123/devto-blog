import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginDialog = ({ open, onClose, onLogin }: { open: boolean; onClose: () => void; onLogin: (user: string) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real authentication logic
    if (username && password) {
      localStorage.setItem("user", username);
      onLogin(username);
      onClose();
    }
     toast("Login Successfully " + username);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm bg-black/85  bg-opacity-50 ">
      <div className="bg-white  p-4 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="p-2 border border-blue-600 rounded-xl "
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            className="p-2 border border-blue-600 rounded-xl  "
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded-xl h-12 hover:bg-blue-700 transition">
            Login
          </button>
          <button type="button" className="text-gray-500 mt-2" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginDialog;