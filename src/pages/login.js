import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call the API to check the username and password
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    // If the API call was successful, redirect to the welcome page
    if (response.ok) {
      window.location.href = '/welcome';
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <Container>
      <h1 className={`${styles.title} text-center mt-5 mb-3`}>Login</h1>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Group className={styles.inputWrapper}>
          <Form.Label className={styles.label}>Username</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group className={styles.inputWrapper}>
          <Form.Label className={styles.label}>Password</Form.Label>
          <Form.Control
            className={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        {error && <p className={styles.error}>{error}</p>}
        <div className="text-center">
          <Button className={styles.button} type="submit">Login</Button>
        </div>
      </Form>
    </Container>
  );
}
