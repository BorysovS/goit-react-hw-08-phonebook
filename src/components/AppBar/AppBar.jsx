import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';


export const AppBar = () => { 
    const isLoggedIn = useSelector(selectIsLoggedIn)
    console.log(isLoggedIn);

    return (
        <Header>
            <Navigation /> 
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
}