import Contact from "../contact/contact";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} name={name} number={number} />;
      })}
    </ul>
  );
}
