import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import { Button, Modal } from 'react-bootstrap';
import { getAllGeneric, createGeneric, updateGeneric, deleteGeneric } from '../utils/api';

// Assuming api.js has functions for generic CRUD operations
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllGeneric('users'); // Use generic fetch
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteGeneric('users', userId); // Use generic delete
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleSaveUser = async (userData) => {
    try {
      if (userData._id) {
        await updateGeneric('users', userData._id, userData); // Use generic update
      } else {
        await createGeneric('users', userData); // Use generic create
      }
      fetchUsers(); // Refresh the user list
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleCancelForm = () => {
    setIsFormOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">User Management</h2>
      <Button variant="primary" onClick={handleAddUser} className="mb-3">
        Add User
      </Button>

      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />

      <Modal show={isFormOpen} onHide={handleCancelForm}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedUser ? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm user={selectedUser} onSave={handleSaveUser} onCancel={handleCancelForm} />
        </Modal.Body>
        {/* No need for footer buttons if the form handles save/cancel */}
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelForm}>Cancel</Button>
        </Modal.Footer>
        
      </Modal>
    </div>
  );
};

export default UserManagement;