import React from 'react';

function ReusableMenu({ items }) {
    return (
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index}><a href={item.route}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default ReusableMenu;