import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ReusableMenu from './components/ReusableMenu';
import ReusableCard from './components/ReusableCard';
import AdminPanel from './pages/AdminPanel';
import AccountingPanel from './pages/AccountingPanel';
import UserPanel from './pages/UserPanel';
import Dashboard from './pages/Dashboard';
import ProductPage from "./pages/ProductPage";
import ClientPage from "./pages/ClientPage";
import CategoryPage from "./pages/CategoryPage";
import InvoicePage from "./pages/InvoicePage";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import SupplierPage from "./pages/SupplierPage";
import UserPage from "./pages/UserPage";



function App() {
  const menuItems = [
    { label: 'Admin', route: '/admin' },
    { label: 'User', route: '/user' },
    { label: 'Clients', route: '/clients' },
    { label: 'Products', route: '/products' },
    { label: 'Categories', route: '/categories' },
    { label: 'Invoices', route: '/invoices' },
    { label: 'Orders', route: '/orders' },
    { label: 'Payments', route: '/payments' },
    { label: 'Suppliers', route: '/suppliers' },
  ];

  return (
      <div className="app">
           <ReusableMenu items={menuItems} />
        <div className="content">
          <ReusableCard title={"Application Name"} content={"Welcome to the application"} />
          <div className="routes-container">
            <Routes>
              <Route path="/" element={<Navigate to="/user" />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/accounting" element={<AccountingPanel />} />
              <Route path="/user" element={<UserPanel />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clients" element={<ClientPage />} />
              <Route path="/categories" element={<CategoryPage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/payments" element={<PaymentPage />} />
              <Route path="/suppliers" element={<SupplierPage />} />
              <Route path="/users" element={<UserPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/invoice" element={<InvoicePage />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;


