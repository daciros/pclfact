import React, { useState } from 'react';
import ClientList from '../components/ClientList';
import ClientForm from '../components/ClientForm';
import { Container } from 'react-bootstrap';

function ClientPage() {
  const [showForm, setShowForm] = useState(false);

  const handleAddClient = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <Container className="container-fluid">
      <h1>Client Management</h1>
      {!showForm && <button className="btn btn-primary" onClick={handleAddClient}>Add Client</button>}
      {showForm ? (
        <ClientForm onClose={handleFormClose} />
      ) : (
        <ClientList />
      )}
    </Container>
  );
}

export default ClientPage;