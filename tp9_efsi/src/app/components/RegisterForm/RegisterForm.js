import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./RegisterForm.module.css";
import { useAuth } from '../../contexts/AuthContext';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the registration data to a backend
    // For this example, we'll just simulate a successful registration
    login({ name, email });
    router.push('/events');
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Full Name" 
        required 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button type="submit" className={styles.primary}>Register</button>
    </form>
  );
}
