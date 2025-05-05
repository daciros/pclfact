import React, { useState } from 'react';
import ClientList from '../components/ClientList';
import ClientForm from '../components/ClientForm';
//import './AdminPanel.css';
import '../styles/ClientPage.scss';
function ClientPage() {
  const [showForm, setShowForm] = useState(false);

  const handleAddClient = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className="client-page-container">
      <h1>Client Management</h1>
      {!showForm && <button className="client-page-button" onClick={handleAddClient}>Add Client</button>}
      {showForm ? (
        <ClientForm onClose={handleFormClose} />
      ) : (
        <ClientList />
      )}
    </div>
  );
}

export default ClientPage;