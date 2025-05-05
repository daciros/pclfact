import React from 'react';
import SupplierList from '../components/SupplierList';
import SupplierForm from '../components/SupplierForm';
import '../styles/SupplierPage.scss'

function SupplierPage() {
  return (
    <div className='supplier-page-container'>
      <h1>Supplier Management</h1>
      <SupplierForm />
      <SupplierList />
    </div>
  );
}

export default SupplierPage;