import React from 'react';

const AccountingPanel = () => {
  // Dummy data for demonstration
  const financialSummary = {
    totalRevenue: 150000,
    totalExpenses: 80000,
    netProfit: 70000,
  };

  const recentTransactions = [
    { id: 1, description: 'Sale - Product A', amount: 500, type: 'income' },
    { id: 2, description: 'Expense - Office Supplies', amount: 150, type: 'expense' },
    { id: 3, description: 'Sale - Service B', amount: 1200, type: 'income' },
    { id: 4, description: 'Expense - Marketing Campaign', amount: 5000, type: 'expense' },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Accounting Panel</h2>

      <div className="card mb-4">
        <div className="card-header">
          <h3>Financial Summary</h3>
        </div>
        <div className="card-body">
          <p className="card-text"><strong>Total Revenue:</strong> ${financialSummary.totalRevenue.toFixed(2)}</p>
          <p className="card-text"><strong>Total Expenses:</strong> ${financialSummary.totalExpenses.toFixed(2)}</p>
          <p className="card-text"><strong>Net Profit:</strong> ${financialSummary.netProfit.toFixed(2)}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Recent Transactions</h3>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map(transaction => (
                <tr key={transaction.id} className={transaction.type === 'income' ? 'table-success' : 'table-danger'}>
 <th scope="row">{transaction.id}</th>
 <td>{transaction.description}</td>
                <td>${transaction.amount.toFixed(2)}</td>
 <td>{transaction.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
           </div> 
      {/* Add sections for reports, charts, etc. as needed */}
    </div>
  );
};

export default AccountingPanel;