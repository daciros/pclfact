import React, { useState, useEffect } from 'react';
import { fetchGeneric } from '../utils/api';


function PaymentList() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPayments = async () => {
        setLoading(true);
        setError(null);
      try {
        const data = await fetchGeneric('payments');
        setPayments(data);
        } catch (err){
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    }

    fetchPayments();
  }, []);

    if (loading) {
    return <div className="loading">Loading payments...</div>;
  }

  if (error) {
        return <div className="error">Error: {error}</div>;
  }

  return ( <div className="container mt-4">
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h2>Payment List</h2>
                <button className="btn btn-primary">Create New Payment</button>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {payments.map(payment => (
                        <li key={payment.id} className="list-group-item">
                            Payment ID: {payment.id}, Amount: {payment.amount}
                            {/* Add more payment details here */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);
}

export default PaymentList;