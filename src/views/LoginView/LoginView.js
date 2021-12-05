import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import s from "./LoginView.module.css";
import authSelectors from "../../redux/auth/auth-selectors";

import { Link } from "react-router-dom";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    !isLoggedIn && (
      <div className={s.container}>
        <h1 className={s.title}>Sign in</h1>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={s.inputs}>
            <label className={s.label}>
              E-mail
              <input
                className={s.input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>

            <label className={s.label}>
              Password
              <input
                className={s.input}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                minLength="8"
                autoComplete="off"
              />
            </label>
          </div>

          <button type="submit" className={s.button}>
            Log in
          </button>
        </form>
        <p className={s.text}>
          Don't have an account?
          <Link to="/register" className={s.link}>
            Sign up
          </Link>
        </p>
      </div>
    )
  );
}
