import React, { useState, useEffect } from 'react';
import { getCategories } from '../utils/api';
import '../styles/CategoryList.scss';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getCategories();
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
    <div className='category-list-container'>
      <h2>Category List</h2>
      {loading && <p className='loading'>Loading categories...</p>}
      {error && <p className='error'>Error: {error}</p>}
      {!loading && !error && (
        <>
          <button className='create-category-button'>Create Category</button>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CategoryList;