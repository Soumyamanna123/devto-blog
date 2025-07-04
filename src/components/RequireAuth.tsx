import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/" replace />;
  }

  // Logged in → show the protected content
  return <>{children}</>;
};

export default RequireAuth;
