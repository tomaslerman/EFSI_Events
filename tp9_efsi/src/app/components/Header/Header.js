"use client";
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  // This is a placeholder for user authentication state
  const isLoggedIn = false;
  const username = "John Doe";

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Add your logo here */}
        <Link href="/">Your Logo</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      {isLoggedIn && (
        <div className={styles.userInfo}>
          <span>{username}</span>
          <button onClick={() => {/* Add logout logic */}}>Logout</button>
        </div>
      )}
    </header>
  );
}
