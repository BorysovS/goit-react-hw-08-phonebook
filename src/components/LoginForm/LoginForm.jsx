import { Formik } from 'formik';
import { ErrorMessage, Field, Form, FormBtn, FormLabel, LabelName } from './LoginForm.styled';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operation';
import { useDispatch } from 'react-redux';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, {
      message: 'Please create a stronger password',
    })
    .required('Required'),
});


const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => { 
    const dispatch = useDispatch();
    const hadleSubmit = values => { 
        dispatch(logIn(values))
    }
    return (
      <Formik
            initialValues={initialValues}
            onSubmit={(values, action) => { 
                hadleSubmit(values);
                action.resetForm()
            }}
        validationSchema={registerSchema}
      >
        <Form>
          <FormLabel htmlFor="email">
            <LabelName>Email</LabelName>
            <Field name="email" placeholder="Email" />
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
    );
}