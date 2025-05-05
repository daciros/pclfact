import React, { useState } from 'react';
import '../styles/PaymentForm.scss';

function PaymentForm() {
  const [formData, setFormData] = useState({
    amount: '',
    paymentMethod: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
        console.log('Payment data submitted:', formData);
    } catch (err) {
      setError('Failed to create payment.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      amount: '',
      paymentMethod: '',
      date: '',
    });
    setError(null);
  };

  return (
    <div className="payment-form-container">
      <h2 className='payment-form-title'>Create Payment</h2>
      {error && <p className='payment-form-error'>{error}</p>}
      <form className='payment-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='payment-form-label' htmlFor="amount">Amount:</label>
          <input className='payment-form-input'
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
        </div>
        <div className='form-group'>
          <label className='payment-form-label' htmlFor="paymentMethod">Payment Method:</label>
          <input className='payment-form-input'
                type="text"
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              />
        </div>
        <div className='form-group'>
          <label className='payment-form-label' htmlFor="date">Date:</label>
          <input className='payment-form-input'
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
        </div>
        <div className='payment-form-button-container'>
          <button className='payment-form-button' type="submit" disabled={loading}>
              {loading ? 'Creating...' : 'Create Payment'}
            </button>
            <button className='payment-form-button' type="button" onClick={handleReset} disabled={loading}>
              Reset
            </button>
        </div>
      </form>
    </div>
  );
}
