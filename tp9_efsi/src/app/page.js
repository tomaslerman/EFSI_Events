"use client";
import styles from "./page.module.css";
import LoginForm from "./components/LoginForm/LoginForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Login</h1>
        <LoginForm />
      </main>
    </div>
  );
}