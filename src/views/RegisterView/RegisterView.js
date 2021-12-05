import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import s from "./RegisterView.module.css";
import { Link } from "react-router-dom";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Sign Up</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={s.inputs}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>

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

        <button className={s.button} type="submit">
          Register
        </button>
      </form>
      <p className={s.text}>
        Already have an account?
        <Link to="/login" className={s.link}>
          Sign in
        </Link>
      </p>
    </div>
  );
}
