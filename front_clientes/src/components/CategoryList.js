import React, { useState, useEffect } from 'react';
import { fetchGeneric } from '../utils/api';
import { Card, Button, ListGroup, Alert } from 'react-bootstrap';



function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try{
        const data = await fetchGeneric('categories');
        setCategories(data);
      } catch (err) {
          setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
  };
  fetchCategories();
  }, []);

  return (
    <Card>
      <Card.Header>Category List</Card.Header>
      <Card.Body>
        {loading && <Alert variant="info">Loading categories...</Alert>}
        {error && <Alert variant="danger">Error: {error}</Alert>}
        {!loading && !error && (
          <>
            <Button variant="primary" className="mb-3">Create Category</Button>
            <ListGroup>
              {categories.map((category) => (
                <ListGroup.Item key={category.id}>{category.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default CategoryList;