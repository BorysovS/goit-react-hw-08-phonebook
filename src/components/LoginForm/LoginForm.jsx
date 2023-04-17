import { Formik } from 'formik';
import { ErrorMessage, Field, Form, FormBtn, FormLabel, LabelName } from './LoginForm.styled';
import { logIn } from '../../redux/auth/operation';
import { useDispatch } from 'react-redux';



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
          <FormBtn type="submit">Log in</FormBtn>
        </Form>
      </Formik>
    );
}