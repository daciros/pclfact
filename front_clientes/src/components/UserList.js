import React, { useState, useEffect } from 'react';
import { fetchGeneric } from '../utils/api';
import { ListGroup, Button, Card, Alert } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getAllUsers = async () => {
    setLoading(true);
    setError(null);
    try {
        const data = await fetchGeneric('users');
        setUsers(data);
    } catch (error) {
        setError(error.message || 'An error occurred while fetching users');
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading users...</div>
  }

  if (error) {
    return <Alert variant="danger" className="mt-4">Error: {error}</Alert>;
  }

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h2>Users</h2>          
            <Button variant="primary">Create User</Button>
          
        </Card.Header>
        <ListGroup variant="flush">
          {users.map(user => (
            <ListGroup.Item key={user.id}>
              {user.name} - {user.email}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default UserList;