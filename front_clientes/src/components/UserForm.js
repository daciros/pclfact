import React, { useState } from 'react';
import '../styles/UserForm.scss';

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
    <div className="user-form-container">
      <h2>Create User</h2>
      {error && <div className='error'>{error}</div>}
      <form className="user-form" onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='user-label' htmlFor="username">Username:</label>
          <input className='user-input'
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
        </div>
        <div className='form-group'>
          <label className='user-label' htmlFor="email">Email:</label>
          <input className='user-input'
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
        </div>
        <div className='form-group'>
          <label className='user-label' htmlFor="password">Password:</label>
          <input className='user-input'
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
        </div>
        <div className='form-group'>
          <label className='user-label' htmlFor="role">Role:</label>
          <input className='user-input'
              type="text"
              id="role"
              name="role"
              value={user.role}
              onChange={handleChange}
              required
            />
        </div>
        <div className='form-group'>
            <button className='user-button' type="submit" disabled={loading}>
              {loading ? 'Creating...' : 'Create User'}
            </button>
            <button className='user-button' type="button" onClick={handleReset} disabled={loading}>
              Reset
            </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;