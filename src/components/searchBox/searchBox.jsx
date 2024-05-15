import css from "./searchBox.module.css";

export default function SearchBox() {
  return (
    <div className={css.findBox}>
      <label>Find conracts by name</label>
      <input type="text" />
    </div>
  );
}
