import React, { useState, useEffect } from 'react';
import { fetchGeneric } from '../utils/api';
import { Card, Button, ListGroup, Alert } from 'react-bootstrap';

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      setLoading(true);
      setError(null);
      try{
          const data = await fetchGeneric('invoices');
          setInvoices(data);
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    }

    fetchInvoices();

  }, []);

  const handleCreateInvoice = () => {
    console.log('Create new invoice');
  };

    if (loading) {
        return <Alert variant="info">Loading invoices...</Alert>;
    }

    if (error) {
        return <Alert variant="danger">Error: {error}</Alert>;
    }

  return (
      <Card>
          <Card.Body>
              <Card.Title>Invoice List</Card.Title>
              <Button variant="primary" onClick={handleCreateInvoice} className="mb-3">
                  Create Invoice
              </Button>
              <ListGroup>
                  {invoices.map((invoice) => (
                      <ListGroup.Item key={invoice.id}>
                          Invoice ID: {invoice.id}, Date: {invoice.date}, Total: {invoice.total}
                      </ListGroup.Item>
                  ))}
              </ListGroup>
          </Card.Body>
      </Card>
  );
}

export default InvoiceList;