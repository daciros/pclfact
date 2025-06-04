import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ReusableCard = ({ title, content, actions, className }) => {
  return (
    <Card className={className}>
      {title && (
        <Card.Header>
          {title}
        </Card.Header>
      )}      
      <Card.Body>
        {typeof content === 'string' ? <p>{content}</p> : content}
      </Card.Body>
      {actions && actions.length > 0 && (
        <Card.Footer>
          {actions.map((action, index) => (
            <Button key={index} variant="primary">
              {action.text}
            </Button>
          ))}
        </Card.Footer>
      )}

        
    </Card>
    )
  };

  export default ReusableCard;
