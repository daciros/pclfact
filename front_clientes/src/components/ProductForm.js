import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, InputGroup, Label } from 'react-bootstrap';
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
    <Card className="p-3">
        <Form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <Form.Group className="mb-3">
              <Form.Control className="mb-3">
              <Form.Label htmlFor="productName" className="form-label">
                Product Name:
              </Form.Label>
              <Form.Text
                type="text"
                id="productName"
                value={formData.productName}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </Form.Control>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
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
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Stock:
              </label>
              <input
                type="number"
                min="0"
                id="stock"
                value={formData.stock}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </Form.Group>
        </Form>
    </Card>
  );
};

export default ProductForm;