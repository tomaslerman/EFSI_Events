"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useAuth } from '../../contexts/AuthContext'; // We'll create this context later

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Site Logo" width={50} height={50} />
      </div>
      <nav className={styles.nav}>
        <Link href="/events">Home</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      {user && (
        <div className={styles.userInfo}>
          <Image src="/user-icon.png" alt="User Icon" width={24} height={24} />
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  );
}
