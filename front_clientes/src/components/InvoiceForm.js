import React, { useState, useEffect } from 'react';
import { createInvoice, getAllProducts, getAllClients } from '../utils/api';
import '../styles/InvoiceForm.scss';

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
            const products = await getAllProducts();
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
        setError(err.message)
      console.error('Failed to create invoice:', err);
    }
  };

  const calculateTotal = () => {
    const total = invoiceProducts.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    setTotal(total)
  }
  return (
    <form className='invoice-form' onSubmit={handleCreateInvoice}>
      {error && <p className='error-message'>{error}</p>}
        <div className='form-group'>
            <label htmlFor="clientId">Client:</label>
            <select
                className="invoice-select"
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
            </select>
        </div>
        <div className='form-group'>
            <label htmlFor="productId">Product:</label>
            <select
                className="invoice-select"
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
            </select>
        </div>
        <div className='form-group'>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" name="quantity" value={formData.quantity} min="1" onChange={handleInputChange} />
        </div>

        <button className="invoice-button" onClick={handleAddProduct}>Add Product</button>
        <div>
            <h3>Products in Invoice:</h3>
            <ul>
                {invoiceProducts.map((item, index) => (
                    <li key={index}>{item.product.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <button className="invoice-button" onClick={calculateTotal}>Calculate total</button>
            <h3>Total: {total}</h3>
        </div><button className="invoice-button" type="submit">Create Invoice</button>
    
    </form>
  );
}

export default InvoiceForm;