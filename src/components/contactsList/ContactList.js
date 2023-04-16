import { ContactListItem } from './ContactListItem';
import { ContactsList, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectVisibleContact,
  selectIsLoading,
  // selectContacts,
} from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {isLoading && <Loader />}
      {visibleContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ContactListItem
              id={contact.id}
              name={contact.name}
              phone={contact.number}
            />
          </ListItem>
        );
      })}
    </ContactsList>
  );
};
