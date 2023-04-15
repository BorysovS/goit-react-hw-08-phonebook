import { ContactForm } from './phonebookForm/PhonebookForn';
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './contactsList/ContactList';
import { Filter } from './filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Toaster } from 'react-hot-toast';

import Home from 'pages/Home/Home';
import SignUp from 'pages/Signup/Signup';
import LogIn from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';


export const App = () => {
  const dispatch = useDispatch();

useEffect(() => {
 dispatch(fetchContacts()) 
}, [dispatch])


    return (
      // <Layout>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={ <Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/contacts' element={< Contacts />} />
            </Route>
        </Routes>
      // {/* <h1>Phonebook</h1>
      // <ContactForm />
      // <h2>Contacts</h2>
      // <Filter />
      // <ContactList />
      // <GlobalStyle />
      // < Toaster /> */}
    // </Layout>
  )
};
