import React, { useState } from 'react';
import '../styles/SupplierForm.scss';

function SupplierForm() {
  const [supplierData, setSupplierData] = useState({
    name: '',
    contact: '',
    address: '',
    // Add more fields as needed
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setSupplierData({
      ...supplierData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Here you would typically send the supplierData to your API
      console.log('Supplier data submitted:', supplierData);
      // Example: const response = await fetch('/api/suppliers', { method: 'POST', body: JSON.stringify(supplierData) });
      // Example: if (!response.ok) throw new Error('Failed to create supplier');
      // Example: const data = await response.json();
      // Reset the form
      setSupplierData({
        name: '',
        contact: '',
        address: '',
        // Reset other fields as needed
      });
    } catch (err) {
      setError('Failed to create supplier. Please try again.');
      console.error('Error creating supplier:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSupplierData({
      name: '',
      contact: '',
      address: '',
    });
    setError('');
  };

  return (
    <div className="supplier-form-container">
      <h2>Create New Supplier</h2>
      {error && <div className="supplier-form-error">{error}</div>}
      <form onSubmit={handleSubmit} className='supplier-form'>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={supplierData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={supplierData.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={supplierData.address}
            onChange={handleChange}
          />
        </div>
        {/* Add more input fields as needed */}
        <div className='supplier-form-buttons'>
          <button type="submit" disabled={loading} className='supplier-form-button'>
            {loading ? 'Creating...' : 'Create Supplier'}
          </button>
          <button type="button" onClick={handleReset} disabled={loading} className='supplier-form-button'>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default SupplierForm;
