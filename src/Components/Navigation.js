import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#ffffff",
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Link to="/" style={styles.link}>
        Home
      </Link>

      {isLoggedIn && (
        <Link to="/contacts" style={styles.link}>
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
