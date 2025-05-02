import React from 'react';

const ReusableCard = ({ title, content, actions }) => {
    
  return (
    <div className="card">
      <div className="card-header">
        {title}
      </div>
      <div className="card-body">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
      {actions && actions.length > 0 && (
        <div className="card-footer">
          {actions.map((action, index) => (
            <button key={index} className="btn btn-primary">
              {action}
            </button>
          ))}

        
    </div>)};
    </div>)
};

export default ReusableCard;