import React from 'react';
import { Table, Button } from 'react-bootstrap';
const ReusableTable = ({ data, columns, actions, className }) => {
  if (!data || data.length === 0) {
    return <p className="text-center">No data available</p>;
  }
  
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };
  
  
  return (  <Table striped bordered hover className={className || ''}>
      <thead className="table-dark">   
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
        ))}
          {actions && actions.length > 0 && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}           
            
          >
            {columns.map((column, colIndex) => {
              const cellValue = column.accessor
                ? getNestedValue(row, column.accessor)
                : row[column.key];

              return (
                <td key={colIndex} >
                  {column.format
                    ? column.format(cellValue, row)
                    : cellValue}
                </td>
              );
            })}
            {actions && actions.length > 0 && (
              <td>
                {actions.map((action, actionIndex) => (
                  <button 
                    key={`${rowIndex}-${actionIndex}`} 
                    className="btn btn-primary me-2 mb-1" 
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();

                      action.action(row);
                    }}>
                    {action.text}
                 </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReusableTable;