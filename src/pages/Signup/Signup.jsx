import { SignUpForm } from "components/SignUpForm/SignUpForm"
// import { Helmet } from 'react-helmet';
import { Container } from "./Sugnup.styled";

const SignUp = () => { 
    return (
        <Container>
            <h2>Create your account</h2>
            <SignUpForm />
        </Container>
    )
}

export default SignUp