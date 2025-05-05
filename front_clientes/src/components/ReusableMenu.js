import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ReusableMenu.scss';

function ReusableMenu() {
    const items = [
        { label: 'Clients', route: '/clients' },
        { label: 'Products', route: '/products' },
        { label: 'Invoices', route: '/invoices' },
      ];

    return (
        <div className='menu-container'>
            <ul className='menu-list'>
                {items.map((item, index) => (
                    <li key={index}>
                         <Link to={item.route}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );   
    }

export default ReusableMenu;