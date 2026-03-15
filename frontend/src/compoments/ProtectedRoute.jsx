import { Navigate } from "react-router";

export default function ProtectedRoute({token, children}) {
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
