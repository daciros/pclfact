import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';


function UserForm() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('User created:', user);
      setUser({
        username: '',
        email: '',
        password: '',
        role: '',
      });
    } catch (err) {
      setError('Failed to create user.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUser({
      username: '',
      email: '',
      password: '',
      role: '',
    });
    setError(null);
  };

  return (
    <div className='container mt-4'>
       <Card>
        <Card.Body>
          <Card.Title>Create User</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" name="username" value={user.username} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={user.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" name="password" value={user.password} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Role:</Form.Label>
              <Form.Control type="text" name="role" value={user.role} onChange={handleChange} required />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button className="me-2" variant="primary" type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create User'}
              </Button>
              <Button variant="secondary" type="button" onClick={handleReset} disabled={loading}>
                Reset
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserForm;

