import React from "react";
import { Link } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

export default function AuthNav() {
  return (
    <div>
      <Link to="/register" style={styles.link}>
        Sign Up
      </Link>
      <Link to="/login" style={styles.link}>
        Sign In
      </Link>
    </div>
  );
}
