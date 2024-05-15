import css from "./contactForm.module.css";

import { Formik, Form, Field } from "formik";

export default function ContactForm() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.addContact}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" className={css.formField}></Field>
        <label htmlFor="number">Number</label>
        <Field type="text" name="number" className={css.formField}></Field>
        <button className={css.addBut}>Add contact</button>
      </Form>
    </Formik>
  );
}
