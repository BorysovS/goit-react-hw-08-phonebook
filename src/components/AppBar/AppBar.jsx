import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';


export const AppBar = () => { 
    return (
        <Header>
            <Navigation /> 
            <AuthNav />
        </Header>
    )
}