import "./App.css";
import { useState } from "react";

import dateContacts from "../contacts.json";

import ContactForm from "../contactForm/contactForm";
import SearchBox from "../searchBox/searchBox";
import ContactList from "../contactList/contactList";

function App() {
  const [contacts, setContacts] = useState(dateContacts);
  const [search, setSearch] = useState("");

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  function addContact(obj) {
    setContacts((prevContacts) => {
      return [...prevContacts, obj];
    });
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filterContacts} />
    </>
  );
}

export default App;
