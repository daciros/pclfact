import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/api';
import ReusableTable from '../components/ReusableTable';
import '../styles/AdminPanel.scss';

function AdminPanel() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchData('http://localhost:3090/api/products', 'get');
      setData(response);
      setColumns(response.length > 0 ? Object.keys(response[0]) : []);
    };

    getProducts();
  }, []);

  return (
    <div className='admin-panel-container'>
      Admin Panel
      <ReusableTable data={data} columns={columns}/>
    </div>
  );
}

export default AdminPanel;