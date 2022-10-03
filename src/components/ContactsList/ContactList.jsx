import { List, ListItem } from './ContactList.styled';
import { Contact } from './Contact/Contact';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filterState = useSelector(state => state.filter);
  const filteredContacts = useSelector(state => {
    return state.contacts.filter(item =>
      item.name.toLowerCase().includes(filterState.toLowerCase())
    );
  });
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact id={id} name={name} number={number} />
        </ListItem>
      ))}
    </List>
  );
};
