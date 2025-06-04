import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalClients: 0,
    totalProducts: 0,
    totalInvoices: 0,
  });

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    // For this example, we'll use mock data
    setMetrics({
      totalClients: 150,
      totalProducts: 500,
      totalInvoices: 750,
    });
  }, []);

  return (
    <Container fluid className="p-4">
      <h2 className="mb-4">CRM Dashboard</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Total Clients</Card.Title>
              <Card.Text>{metrics.totalClients}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Total Products</Card.Title>
              <Card.Text>{metrics.totalProducts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Total Invoices</Card.Title>
              <Card.Text>{metrics.totalInvoices}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Add more dashboard sections here, e.g., recent activities, charts */}
    </Container>
  );
};

export default Dashboard;