import React, { useState, useEffect } from 'react';
import '../styles/OrderList.scss'

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="loading">Loading orders...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className='order-list-container'>
      <h2>Order List</h2>
      
        <button className='create-order-button'>Create Order</button>
    
      <ul className='order-list'>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id} - Client: {order.clientId} - Date: {order.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;