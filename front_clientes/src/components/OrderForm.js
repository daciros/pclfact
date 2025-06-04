import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';


const OrderForm = () => {
  const [orderData, setOrderData] = useState({
    clientId: '',
    products: [], 
    date: '',
    total: 0,
    status: 'pending'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      
      console.log('Order data submitted:', orderData);
    
      setOrderData({
        clientId: '',
        products: [],
        date: '',
        total: 0,
        status: 'pending'
      })
      
    } catch (err) {
      setError('Failed to create order.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setOrderData({
      clientId: '',
      products: [],
      date: '',
      total: 0,
      status: 'pending'
    });
    setError('');
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Create New Order</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="clientId">
            <Form.Label>Client ID:</Form.Label>
            <Form.Control
              type="text"
              name="clientId"
              value={orderData.clientId}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="products">
            <Form.Label>Products:</Form.Label>
            <Form.Control
              type="text"
              name="products"
              value={orderData.products}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={orderData.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="total">
            <Form.Label>Total:</Form.Label>
            <Form.Control
              type="number"
              name="total"
              value={orderData.total}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status:</Form.Label>
            <Form.Select name="status" value={orderData.status} onChange={handleChange}>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="canceled">Canceled</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit" disabled={loading} className="me-2">
              {loading ? 'Creating...' : 'Create Order'}
            </Button>
            <Button variant="secondary" type="button" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default OrderForm;