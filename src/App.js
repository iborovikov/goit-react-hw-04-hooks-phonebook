import { useState, useEffect, useRef } from 'react';
import './App.css';
import Form from './Components/Form/Form'
import Filter from './Components/Filter/filter'
import ContactList from './Components/Contacts/ContactList';
import shortid from 'shortid';

function App() {
  const [contacts, setContact] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  const normalizedContact = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContact));

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    }
    setContact(c => [...c, contact])
  };
  
  const removeContact = (id) => {
    setContact(c => c.filter(contact => contact.id !== id))
  };

  const isNameInList = (name) => contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase());

  const onFormSubmit = (name, number) => {
    if (isNameInList(name)) {
      setFilter('');
      return alert(`${name} is already in contacts`)
    };
    addContact(name, number);
    setFilter('');
  };
  
  useEffect(() => {
    const localStoregeContacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(localStoregeContacts)

    if (isFirstRender.current) {
      setContact(parsedContacts)
      isFirstRender.current = false
    };
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
  }, [contacts]);
  
  return (
    <>
      <h1>Phonebook</h1>
      <Form onFormSubmit={onFormSubmit} />
      <h2>Contacts</h2>
      <Filter onFilterInputChange={setFilter} filter={filter} />
      <ContactList contacts={visibleContacts} removeContact={removeContact} />
    </>
  );
};


export default App;
