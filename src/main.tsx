import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { AuthProvider } from "./context/useAuth.tsx";
import { FollowProvider } from "./context/FollowContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <FollowProvider>
        <App />
      </FollowProvider>
    </AuthProvider>
  </StrictMode>
);
