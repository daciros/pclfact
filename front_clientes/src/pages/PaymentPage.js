import React from 'react';
import PaymentList from '../components/PaymentList';
import PaymentForm from '../components/PaymentForm';
import '../styles/PaymentPage.scss'

function PaymentPage() {
  return (
    <div className='payment-page-container'>
      <h1>Payment Page</h1>
      <PaymentForm />
      <PaymentList />
    </div>
  );
}

export default PaymentPage;