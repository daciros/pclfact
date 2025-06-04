import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';



  
function CategoryForm() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      
      console.log('Submitting category:', name);
    } catch (err) {
      setError('Failed to create category');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setError(null);
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Create Category</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              variant="primary"
              type="submit"
              disabled={loading}
              className="me-2"
            >
              {loading ? 'Creating...' : 'Create'}
            </Button>
            <Button variant="secondary" type="button" onClick={handleReset} disabled={loading}>
              Reset
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CategoryForm;