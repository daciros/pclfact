import React, { useState } from 'react';
import '../styles/OrderForm.scss'
const OrderForm = () => {
  const [orderData, setOrderData] = useState({
    clientId: '',
    products: [], 
    date: '',
    total: 0,
    status: 'pending'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      
      console.log('Order data submitted:', orderData);
    
      setOrderData({
        clientId: '',
        products: [],
        date: '',
        total: 0,
        status: 'pending'
      })
      
    } catch (err) {
      setError('Failed to create order.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setOrderData({
      clientId: '',
      products: [],
      date: '',
      total: 0,
      status: 'pending'
    });
    setError('');
  };

  return (
    <div className='order-form-container'>
      <h2>Create New Order</h2>
      {error && <div className='error'>{error}</div>}
      <form className='order-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='order-label' htmlFor="clientId">Client ID:</label>
          <input className='order-input'
            type="text"
            id="clientId"
            name="clientId"
            value={orderData.clientId}
            onChange={handleChange}
            required
          />
        </div><div className='form-group'>
          <label className='order-label' htmlFor="products">Products:</label>
          <input className='order-input'
           type="text"
            id="products"
            name="products"
            value={orderData.products}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label className='order-label' htmlFor="date">Date:</label>
          <input className='order-input'
            type="date"
            id="date"
            name="date"
            value={orderData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label className='order-label' htmlFor="total">Total:</label>
          <input className='order-input'
            type="number"
            id="total"
            name="total"
            value={orderData.total}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
        <label className='order-label' htmlFor="status">Status:</label>
          <select className='order-select' id="status" name="status" value={orderData.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
        <div className='order-button-container'>
          <button className='order-button' type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Order'}
          </button>
          <button className='order-button' type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;