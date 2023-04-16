import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operation";
import { selectUserName } from "redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)

  return (
    <div>
      <p>Welcome {userName }</p>
      <button type="button" onClick={() => {dispatch(logOut())}}>Logout</button>
    </div>
  );
};
