import React from 'react';

const ReusableTable = ({ data, columns, actions, className }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  // Helper function to get the value of a nested property
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <table className={`reusable-table ${className || ''}`}>
      <thead>
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
            onClick={() => onRowClick && onRowClick(row)}
            className={onRowClick ? 'clickable-row' : ''}
          >
            {columns.map((column, colIndex) => {
              const cellValue = column.accessor
                ? getNestedValue(row, column.accessor)
                : row[column.key];

              return (
                <td key={colIndex}>
                  {column.format
                    ? column.format(cellValue, row)
                    : cellValue}
                </td>
              );
            })}
            {actions && actions.length > 0 && (
              <td>
                {actions.map((action, actionIndex) => (
                  <button key={`${rowIndex}-${actionIndex}`} onClick={(e) => {
                    e.stopPropagation();
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
    </table>
  );
};


export default ReusableTable;