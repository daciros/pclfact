import React, { useState, useEffect } from 'react';
import { fetchGeneric } from '../utils/api';
import { Card, Button, ListGroup, Alert } from 'react-bootstrap';
const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllOrders = async () => {
    setLoading(true);
    setError(null);
    try {
        const data = await fetchGeneric('orders');
        setOrders(data);
    } catch (error) {
        setError(error.message || 'An error occurred while fetching orders');
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    
    getAllOrders();
  }, []);

  if (loading) {
    return <div className="text-center">Loading orders...</div>
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <Card className="mt-4">
      <Card.Header>Order List</Card.Header>
      <Card.Body>
        <Button className="mb-3">Create Order</Button>
        <ListGroup>
          {orders.map(order => (
            <ListGroup.Item key={order.id} >
              Order ID: {order.id} - Client: {order.clientId} - Date: {order.date}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default OrderList;