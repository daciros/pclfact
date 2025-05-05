import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import '../styles/ProductPage.scss';

function ProductPage() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="product-page-container">
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
    </div>
  );
}
export default ProductPage;