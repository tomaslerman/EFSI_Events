import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <h1>Contact Us</h1>
      <p>Email: contact@yoursite.com</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Address: 123 Main St, City, Country</p>
    </div>
  );
}
