import React, { useState, useEffect } from 'react';
import { createInvoice, getAllGeneric, getAllClients } from '../utils/api';
import { Form, Button, Card, Alert, ListGroup } from 'react-bootstrap';



function InvoiceForm() {
  const [formData, setFormData] = useState({
    clientId: '',
    productId: '',
    quantity: 1,
  });
  const [invoiceProducts, setInvoiceProducts] = useState([]);
  const [availableClients, setAvailableClients] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchClientsAndProducts = async () => {
        try {
            const clients = await getAllClients();
            const products = await getAllGeneric('/products');
            setAvailableClients(clients);
            setAvailableProducts(products);
        } catch (err) {
            setError(err.message)
        }
      
    };

    fetchClientsAndProducts();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    if (formData.productId && formData.quantity > 0) {
      const productToAdd = availableProducts.find(
        (p) => p._id === formData.productId
      );
      if (productToAdd) {
        setInvoiceProducts([
          ...invoiceProducts,
          { product: productToAdd, quantity: formData.quantity },
        ]);
        setFormData({ ...formData, productId: '', quantity: 1 });
        setError(null);
      }
    } else {
        setError('You must select a product and quantity');
    }
  };

  const handleCreateInvoice = async (event) => {
    event.preventDefault();

    if (!formData.clientId || invoiceProducts.length === 0) {
      setError('Client and at least one product are required');
      return;
    }

    try {
      const invoiceData = { 
        clientId: formData.clientId,
        products: invoiceProducts.map(item => ({ productId: item.product._id, quantity: item.quantity })),
      };
      await createInvoice(invoiceData);
      setInvoiceProducts([]);
      setFormData({clientId: '', productId: '', quantity: 1});
      setError(null)
    } catch (err) { 
      setError(err.message);
    }
  };

  const calculateTotal = () => {
    const total = invoiceProducts.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    setTotal(total);
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Create Invoice</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleCreateInvoice}>
          <Form.Group className="mb-3" controlId="clientId">
            <Form.Label>Client:</Form.Label>
            <Form.Select
              name="clientId"
              value={formData.clientId}
              onChange={handleInputChange}
            >
              <option value="">Select a client</option>
              {availableClients.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="productId">
            <Form.Label>Product:</Form.Label>
            <Form.Select
              name="productId"
              value={formData.productId}
              onChange={handleInputChange}
            >
              <option value="">Select a product</option>
              {availableProducts.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={formData.quantity}
              min="1"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button type="button" variant="primary" className="me-2" onClick={handleAddProduct}>Add Product</Button>
          <div className="mt-3">
            <h4>Products in Invoice:</h4>
            <ul className="list-group">
              {invoiceProducts.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item.product.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
            <div className="mt-3">
                <Button type="button" variant="primary" className="me-2" onClick={calculateTotal}>Calculate total</Button>
                <h3>Total: {total}</h3>
            </div>
          <Button type="submit" variant="primary">Create Invoice</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default InvoiceForm;