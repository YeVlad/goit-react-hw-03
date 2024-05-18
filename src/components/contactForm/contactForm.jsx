import css from "./contactForm.module.css";

import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

export default function ContactForm({ addContact }) {
  function handleSubmit(values, actions) {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.addContact}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" className={css.formField}></Field>
        <label htmlFor="number">Number</label>
        <Field type="text" name="number" className={css.formField}></Field>
        <button className={css.addBut} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
