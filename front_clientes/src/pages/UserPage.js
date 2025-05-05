import React from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import '../styles/UserPage.scss'

function UserPage() {
  return (
    <div className='user-page-container'>
      <h1>User Management</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default UserPage;