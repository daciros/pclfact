import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
//import '../styles/ProductPage.scss';
import { Container } from 'react-bootstrap';

function ProductPage() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Container className="container-fluid">
      <h1>Product Management</h1>
      <div className="product-page-container">
      {showForm ? (
        <ProductForm onCancel={toggleForm} />
      ) : (
        <>
          <ProductList onAddProduct={toggleForm} />
        </>
      )}
      </div>
    </Container>
  );
}
export default ProductPage;