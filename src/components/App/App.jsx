import "./App.css";
import { useState } from "react";

import dateContacts from "../contacts.json";

import ContactForm from "../contactForm/contactForm";
import SearchBox from "../searchBox/searchBox";
import ContactList from "../contactList/contactList";

function App() {
  const [contacts, setContacts] = useState(dateContacts);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
