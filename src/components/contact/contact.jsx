import css from "./contact.module.css";

export default function Contact({ name, number }) {
  return (
    <li className={css.contact}>
      <div className="forInfo">
        <p>{name}</p>
        <p>{number} </p>
      </div>
      <button>Delete</button>
    </li>
  );
}
