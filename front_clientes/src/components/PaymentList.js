import React, { useState, useEffect } from 'react';
import { getPayments } from '../utils/api';
import '../styles/PaymentList.scss'

function PaymentList() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await getPayments();
        setPayments(data);
      } catch (err) {
        setError('Failed to load payments.');
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

    if (loading) {
    return <div className="loading">Loading payments...</div>;
  }

  if (error) {
        return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="payment-list-container">
      <h2>Payment List</h2>
      <button className="create-payment-button">Create New Payment</button>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            Payment ID: {payment.id}, Amount: {payment.amount}
            {/* Add more payment details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentList;