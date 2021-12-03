import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import Avatar from "@mui/material/Avatar";
import s from "./UserMenu.module.css";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div style={styles.container}>
      <Avatar src="/broken-image.jpg" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
