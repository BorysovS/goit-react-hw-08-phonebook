import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operation";
import { selectUserName } from "redux/auth/selectors";
import { Container, UserMenuBtn } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)

  return (
    <Container>
      <p>Welcome {userName }</p>
      <UserMenuBtn type="button" onClick={() => {dispatch(logOut())}}>Logout</UserMenuBtn>
    </Container>
  );
};
