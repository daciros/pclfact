import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';


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
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Create New Supplier</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={supplierData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contact">
            <Form.Label>Contact:</Form.Label>
            <Form.Control
              type="text"
              name="contact"
              value={supplierData.contact}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={supplierData.address}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              variant="primary"
              className="me-2"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Supplier'}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={handleReset}
              disabled={loading}
            >
              Reset
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SupplierForm;
