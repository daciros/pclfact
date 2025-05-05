import React, { useState, useEffect } from 'react';
import '../styles/InvoiceList.scss'

function InvoiceList() { 
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/invoices'); 
        if (!response.ok) {
          throw new Error('Failed to fetch invoices');
        }
        const data = await response.json();
        setInvoices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateInvoice = () => {
    console.log('Create new invoice');
  };

  if (loading) {
    return <div className='loading'>Loading invoices...</div>;
  }

  if (error) {
    return <div className='error'>Error: {error}</div>;
  }

  return (
    <div className='invoice-list-container'>
      <h2>Invoice List</h2>
      <button className='button-create' onClick={handleCreateInvoice}>Create Invoice</button>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>
            Invoice ID: {invoice.id}, Date: {invoice.date}, Total: {invoice.total}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;