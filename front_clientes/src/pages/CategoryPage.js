import React from 'react';
import CategoryList from '../components/CategoryList';
import CategoryForm from '../components/CategoryForm';
import '../styles/CategoryPage.scss';

function CategoryPage() {
  return (
    <div className='category-page'>
      <h1>Category Page</h1>
      <CategoryForm />
      <CategoryList />
    </div>
  );
}

export default CategoryPage;