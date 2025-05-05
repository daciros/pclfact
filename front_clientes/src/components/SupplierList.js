import React, { useState, useEffect } from 'react';
import { fetchSuppliers } from '../utils/api';
import '../styles/SupplierList.scss';

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSuppliers = async () => {
      try {
        const data = await fetchSuppliers();
        setSuppliers(data);
      } catch (err) {
        setError('Error loading suppliers.');
      } finally {
        setLoading(false);
      }
    };

    loadSuppliers();
  }, []);

  if (loading) {
    return <div className="loading">Loading suppliers...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="supplier-list-container">
      <h2>Supplier List</h2>
      <button>Create Supplier</button>
      <ul>
        {suppliers.map((supplier) => (
          <li key={supplier.id}>
            {supplier.name} - {supplier.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierList;