import React from 'react';
import InvoiceList from '../components/InvoiceList';
import InvoiceForm from '../components/InvoiceForm';
import '../styles/InvoicePage.scss';

function InvoicePage() {
  return (
    <div className='invoice-page-container'>
      <h1>Invoice Management</h1>
      <InvoiceForm />
      <InvoiceList />
    </div>
  );
}

export default InvoicePage;