import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReusableTable from './ReusableTable';
import { Button } from '@mui/material';
import '../styles/ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    
    console.log('Add new product');
  };

  if (loading) {
    return <div className="loading-product">Loading products...</div>;
  }

  if (error) {
    return <div className="error-product">Error: {error}</div>;
  }

  const headers = [
    { label: 'ID', key: '_id' },
    { label: 'Name', key: 'nombre' },
    { label: 'Description', key: 'descripcion' },
    { label: 'Price', key: 'precio' },
    { label: 'Stock', key: 'stock' },
  ];

  return (
    <div className="product-list-container">
      <h1>Products</h1>
      <Button variant="contained" color="primary" onClick={handleAddProduct}>
        Add Product
      </Button>
      <ReusableTable headers={headers} data={products} />
    </div>
  );
};

export default ProductList;