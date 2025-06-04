import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';

function PaymentForm() {
  const [formData, setFormData] = useState({
    amount: '',
    paymentMethod: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
        console.log('Payment data submitted:', formData);
    } catch (err) {
      setError('Failed to create payment.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      amount: '',
      paymentMethod: '',
      date: '',
    });
    setError(null);
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Create Payment</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>
                Amount:
            </Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="paymentMethod">
            <Form.Label>
                Payment Method:
            </Form.Label>
            <Form.Control
              type="text"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>
                Date:
            </Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit" variant="primary" className="me-2" disabled={loading}>
              {loading ? 'Creating...' : 'Create Payment'}
            </Button>
            <Button type="button" variant="secondary" onClick={handleReset} disabled={loading}>
              Reset
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default PaymentForm;
