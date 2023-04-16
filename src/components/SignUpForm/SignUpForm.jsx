import { Formik } from 'formik';
import { ErrorMessage, Field, Form, FormBtn, FormLabel, LabelName } from './SignUp.styled';
import * as Yup from 'yup';
import { signUp } from '../../redux/auth/operation';
import { useDispatch } from 'react-redux';


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Username must be at least 3 characters long').required('Required'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, {
      message: 'Please create a stronger password',
    })
    .required('Required'),
});


const initialValues = {
  name: '',
  email: '',
  password: '',
};



export const SignUpForm = () => { 
    const dispatch = useDispatch()
    

const hadleSubmit = values => { 
    dispatch(signUp(values)) 
}


    return (
        <Formik initialValues={initialValues} onSubmit={(values, actions) => {
            hadleSubmit(values);
            actions.resetForm();
        }} validationSchema = { registerSchema } >
            <Form>
        <FormLabel htmlFor="name">
          <LabelName>Name</LabelName>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel htmlFor="email">
          <LabelName>Email</LabelName>
          <Field name="email" placeholder="Email"/>
          <ErrorMessage name="email" component="span" />
                </FormLabel>
                <FormLabel htmlFor="password">
          <LabelName>Password</LabelName>
          <Field name="password" placeholder="Password" type='password'/>
          <ErrorMessage name="password" component="span" />
        </FormLabel>
                <FormBtn type="submit">Sign Up</FormBtn>
            </Form>
            </Formik>
    )
}