import { ContactList } from "../../components/contactsList/ContactList"
import { ContactForm } from "components/phonebookForm/PhonebookForn"
import { Filter } from '../../components/filter/Filter';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

const Contacts = () => { 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    
    return (
        <div>
            <ContactForm />
            <Filter />
            <ContactList />
        </div>
    )
}

export default Contacts