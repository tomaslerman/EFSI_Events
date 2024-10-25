"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./LoginForm.module.css";
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate the credentials with a backend
    // For this example, we'll just simulate a successful login
    login({ name: 'John Doe', email });
    router.push('/events');
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email" 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className={styles.primary}>Log In</button>
      <p>Don't have an account? <Link href="/register">Register here</Link></p>
    </form>
  );
}
