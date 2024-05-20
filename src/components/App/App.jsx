import "./App.css";
import { useState, useEffect } from "react";

import dateContacts from "../contacts.json";

import ContactForm from "../contactForm/contactForm";
import SearchBox from "../searchBox/searchBox";
import ContactList from "../contactList/contactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return dateContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [search, setSearch] = useState("");

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  function addContact(obj) {
    setContacts((prevContacts) => {
      return [...prevContacts, obj];
    });
  }

  function delContact(idToDel) {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id != idToDel);
    });
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filterContacts} delContact={delContact} />
    </>
  );
}

export default App;
