import { ContactList } from "../../components/contactsList/ContactList"
import { ContactForm } from "components/phonebookForm/PhonebookForn"
import { Filter } from '../../components/filter/Filter';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { Container } from "./Contacts.styled";

const Contacts = () => { 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    
    return (
        <Container>
            
                <ContactForm />
                <div>
                <Filter />
                <ContactList />
                </div>
        </Container>
    )
}

export default Contacts