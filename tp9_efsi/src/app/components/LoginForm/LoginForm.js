"use client";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.loginForm}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" className={styles.primary}>Log In</button>
    </form>
  );
}