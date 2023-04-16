
import { AuthContainer, StyledLink } from './AuthNav.styled';




export const AuthNav = () => { 
    
    return (
        <AuthContainer>
            <StyledLink to='/signup'>Sign Up</StyledLink>
            <StyledLink to='/login'>Log In</StyledLink>
        </AuthContainer>
    )
}