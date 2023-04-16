import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledLink, Nav } from './Navigation.styled'
import { useSelector } from 'react-redux';



export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};
