import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ProductForm.scss';

const API_URL = 'http://localhost:3000/api/products';
function ProductForm() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    stock: '',
  })
  const [error, setError] = useState(null)

  const handleInputChange = (event) => {
    const { id, value } = event.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    try {
        const response = await axios.post(API_URL, formData);
        if (response.status === 201) {
            setFormData({
                productName: '',
                description: '',
                price: '',
                stock: '',
            });
        } else {
            setError('Error al crear el producto');
            console.error('Error al crear el producto:', response.data);
        }



    } catch (err) {
      setError('Error creating product')
      console.error('Error creating product:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      {error && <div className='error'>{error}</div>}
      <div className='form-group'>
          <label htmlFor="productName" className='form-label'>
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            value={formData.productName}
            onChange={handleInputChange}
            required
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label htmlFor="description" className='form-label'>
            Description:
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label htmlFor="price" className='form-label'>
            Price:
          </label>
          <input
            type="number"
            min="0"
            pattern="^\d*(\.\d{0,2})?$"
            id="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label htmlFor="stock" className='form-label'>
            Stock:
          </label>
          <input
            type="number"
            min="0"
            id="stock"
            value={formData.stock}
            onChange={handleInputChange}
            required
            className='form-input'
          />
        </div>
      
      <button type="submit" className='form-button'>
        Save
      </button>
    </form>
  );
};

export default ProductForm;