import { LoginForm } from "components/LoginForm/LoginForm"
import { Container } from "./Logins.styled"


const LogIn = () => { 
    return (
        <Container>
            <h2>Enter your account</h2>
            <LoginForm />
        </Container>
    )
}

export default LogIn