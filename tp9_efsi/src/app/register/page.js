"use client";
import styles from "../page.module.css";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Link from 'next/link';

export default function Register() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Register</h1>
        <RegisterForm />
        <p>Already have an account? <Link href="/">Login here</Link></p>
      </main>
    </div>
  );
}
