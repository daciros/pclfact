import React, { useState, useEffect } from 'react';
import { fetchGeneric } from '../utils/api';
import { Card, Button, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchSuppliers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGeneric('suppliers');
        setSuppliers(data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching suppliers');
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    fetchSuppliers();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading suppliers...</div>;
  }

  if (error) {
    return <Alert variant="danger" className="mt-4">{error}</Alert>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Supplier List</h2>
          <Button variant="primary">Create Supplier</Button>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {suppliers.map((supplier) => (
              <ListGroup.Item key={supplier.id}>
                {supplier.name} - {supplier.contact}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SupplierList;