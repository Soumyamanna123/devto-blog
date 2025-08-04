import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { AuthProvider } from "./context/useAuth.tsx";
import { FollowProvider } from "./context/FollowContext.tsx";
import { Provider } from "react-redux";
import appStore from "./lib/appStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
      <AuthProvider>
        <FollowProvider>
          <App />
        </FollowProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>
);
