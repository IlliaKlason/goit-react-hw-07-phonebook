// import { useState } from 'react';
// import { useHookLS } from './hooks/hookLS';

// import Notiflix from 'notiflix';
// import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Boxitem } from './ContactsList/ContactList.styled';

import { ContactForm } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactsList';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../api/myAPI';

export function App() {
  const { data, error, isLoading, isFetching } = useGetContactsQuery();
  // const filteredContacts = useSelector(state => state);
  console.log(data);
  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap={10}
      width={[1 / 2]}
      ml={'auto'}
      mr={'auto'}
      p={20}
    >
      <div>
        <h2>Phonebook</h2>
        <ContactForm
        // onSubmit={addContact}
        />
      </div>
      {/* contacts.length */}
      {data.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <Boxitem
            display="inline-flex"
            flexDirection="column"
            border="1px solid black"
          >
            <Filter />
            {/* value={filter} onChange={handleFilterInput} */}
          </Boxitem>
          <ContactList
          // contacts={contacts}
          // onDeleteContact={deleteContact}
          />
        </div>
      ) : (
        <h2>No contacts yet</h2>
      )}
    </Box>
  );
}
