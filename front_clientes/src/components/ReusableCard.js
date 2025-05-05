import React from 'react';
import '../styles/ReusableCard.scss';

const ReusableCard = ({ title, content, actions, className }) => {
    
  return (
    <div className={`reusable-card ${className || ''}`}>
      <div className="reusable-card-header">
        {title}
      </div>
      <div className="reusable-card-body">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
      {actions && actions.length > 0 && (
        <div className="reusable-card-footer">
          {actions.map((action, index) => (
            <button key={index} className="reusable-card-button">
              {action.text}
            </button>
          ))}
        </div>

        
      )};
    </div>
    )
  };

export default ReusableCard;