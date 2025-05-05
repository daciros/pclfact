import React from 'react';
import OrderList from '../components/OrderList';
import OrderForm from '../components/OrderForm';
import './OrderPage.css';

function OrderPage() {
  return (
    <div className='order-page'>
      <h1>Order Page</h1>
      <OrderList />
      <OrderForm />
    </div>
  );
}

export default OrderPage;