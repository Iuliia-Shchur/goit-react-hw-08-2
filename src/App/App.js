import s from "./App.module.css";
import ContactForm from "../Components/ContactForm/ContactForm";
import ContactList from "../Components/ContactList/ContactList";
import Filter from "../Components/Filter/Filter";

import { Route, Routes } from "react-router-dom";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import MenuAppBar from "../Components/AppBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import PrivateRoute from "../Components/PrivateRoute";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";
import PublicRoute from "../Components/PublicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshingCurrentUser = useSelector(
    authSelectors.getIsRefreshingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <div className={s.App}>
        <MenuAppBar />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute isLoggedIn={isLoggedIn} component={HomeView} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                isLoggedIn={isLoggedIn}
                component={RegisterView}
                restricted
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                isLoggedIn={isLoggedIn}
                component={LoginView}
                redirectTo="/contacts"
                restricted
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn} component={ContactForm} />
            }
          />
        </Routes>
        <ToastContainer autoClose={3000} />
      </div>
    )
  );
}

export default App;
