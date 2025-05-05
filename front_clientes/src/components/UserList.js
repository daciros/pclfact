import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../utils/api';
import '../styles/UserList.scss';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to load users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className='loading'>Loading users...</div>;
  }

  if (error) {
    return <div className='error'>Error: {error}</div>;
  }

  return (
    <div className='user-list-container'>
      <h2>Users</h2>
      <button className='user-list-create-button'>Create User</button>
      <ul>
        {users.map(user => (
          <li key={user.id} className='user-list-item'>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;