import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Container, Row, Col, Card, Table, CardBody } from 'react-bootstrap';

const AccountingReport = ({ reportData }) => {
  if (!reportData || Object.keys(reportData).length === 0) {
    return <div className="alert alert-info" role="alert">No accounting data available.</div>;
  }

  const { summary, transactions, monthlyRevenue } = reportData;

  return (
    <Container>
      <h2 className="my-4">
        Accounting Report
      </h2>

      {summary && (
        <>
          <h3 className="mt-4 mb-3">Summary</h3>
          <Card className="mb-4">
            <CardBody>
              <Row>
                <Col>
                  <p className="card-text"><strong>Total Revenue:</strong> ${summary.totalRevenue?.toFixed(2)}</p>
                </Col>
                <Col>
                  <p className="card-text"><strong>Total Expenses:</strong> ${summary.totalExpenses?.toFixed(2)}</p>
                </Col>
                <Col>
                  <p className="card-text"><strong>Net Income:</strong> ${summary.netIncome?.toFixed(2)}</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </>
      )}

      {monthlyRevenue && monthlyRevenue.length > 0 && (
        <>
          <h3 className="mt-4 mb-3">Monthly Revenue</h3>
          <Card className="mb-4">
            <CardBody>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart
                    data={monthlyRevenue}
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>
        </>
      )}

      {transactions && transactions.length > 0 && (
        <>
          <h3 className="mt-4 mb-3">Recent Transactions</h3>
          <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th className="text-right">Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{new Date(transaction.date).toLocaleDateString()}</td>
                    <td>{transaction.description}</td>
                    <td className="text-right">${transaction.amount.toFixed(2)}</td>
                    <td>{transaction.type}</td>
                  </tr>
                ))}
              </TableBody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default AccountingReport;