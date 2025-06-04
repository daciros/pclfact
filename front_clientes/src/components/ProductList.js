import React, { useState, useEffect } from 'react';
import { getAllGeneric } from '../utils/api';
import { Card, Button, Table, Alert } from 'react-bootstrap';
  
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    try {
      const data = await getAllGeneric('api/products/');
      setProducts(data);
    } catch (error) {
      setError(error.message || 'An error occurred while fetching products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
    getAllProducts();
  }, []);

  const handleAddProduct = () => {

    console.log('Add new product');
  };

  if (loading) {
    return <div className="text-center">Loading products...</div>
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Products</Card.Title>
        <Button className="mb-3" onClick={handleAddProduct}>
          Add Product
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th> 
              <th>Name</th> 
              <th>Description</th> 
              <th>Price</th> 
              <th>Stock</th> 
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td> 
                <td>{product.nombre}</td> 
                <td>{product.descripcion}</td> 
                <td>{product.precio}</td> 
                <td>{product.stock}</td> 
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ProductList;