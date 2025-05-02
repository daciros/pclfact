import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ReusableMenu from './components/ReusableMenu';
import ReusableCard from './components/ReusableCard';
import AdminPanel from './pages/AdminPanel';
import UserPanel from './pages/UserPanel';
import './App.css';

function App() {
  const menuItems = [
    { label: 'Admin', route: '/admin' },
    { label: 'User', route: '/user' },
  ];

  return (
      <Router>
      <div className="app-container">
        <ReusableCard title={"test title"} content={"test content"} buttons={["test button 1", "test button 2"]} />
        <ReusableMenu items={menuItems} />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Navigate to="/user" />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/user" element={<UserPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

