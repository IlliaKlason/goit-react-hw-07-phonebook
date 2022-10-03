import { List, ListItem } from './ContactList.styled';
import { Contact } from './Contact/Contact';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../api/myAPI';

const getContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
  );
};

export const ContactList = () => {
  const filterState = useSelector(state => state.filter);
  const { data, error, isLoading, isFetching } = useGetContactsQuery();
  console.log(data);
  return (
    <>
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <List>
          {getContacts(data, filterState).map(({ id, name, number }) => (
            <ListItem key={id}>
              <Contact id={id} name={name} number={number} />
            </ListItem>
          ))}
        </List>
      ) : null}
    </>
  );
};
