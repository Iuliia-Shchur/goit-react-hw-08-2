import { Navigate } from "react-router-dom";

export default function PublicRoute({
  isLoggedIn,
  component: Component,
  restricted = false,
  redirectTo,
}) {
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={"/contacts"} /> : <Component />}</>;
}
