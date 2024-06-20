import css from './Contact.module.css';

export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}
