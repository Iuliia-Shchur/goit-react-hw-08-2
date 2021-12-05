import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import Avatar from "@mui/material/Avatar";
import s from "./UserMenu.module.css";

const styles = {
  avatar: {
    marginRight: 4,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <Avatar src="/broken-image.jpg" style={styles.avatar} />
      <span className={s.name}>Welcome, {name}</span>
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
