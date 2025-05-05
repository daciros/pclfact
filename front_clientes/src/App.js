import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ReusableMenu from './components/ReusableMenu';
import ReusableCard from './components/ReusableCard';
import AdminPanel from './pages/AdminPanel';
import UserPanel from './pages/UserPanel';
import ProductPage from "./pages/ProductPage";
import ClientPage from "./pages/ClientPage";
import InvoicePage from "./pages/InvoicePage";


function App() {
  const menuItems = [
    { label: 'Admin', route: '/admin' },
    { label: 'User', route: '/user' },
    { label: 'Clients', route: '/clients' },
    { label: 'Products', route: '/products' },
    { label: 'Invoices', route: '/invoices' },
  ];

  return (
      <div className="app">
           <ReusableMenu items={menuItems} />
        <div className="content">
          <ReusableCard title={"Application Name"} content={"Welcome to the application"} />
          <div className="routes-container">
            <Routes>
            <Route path="/clients" element={<ClientPage />} />
              <Route path="/" element={<Navigate to="/user" />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/user" element={<UserPanel />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/invoice" element={<InvoicePage />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;


