import { Navigate } from "react-router";

export default function PrivateRoute({ isLoggedIn, component: C }) {
  return <>{isLoggedIn ? <C /> : <Navigate to="/login" />}</>;
}
