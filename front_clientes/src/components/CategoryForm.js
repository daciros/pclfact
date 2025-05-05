import React, { useState } from 'react';
import '../styles/CategoryForm.scss';
  
function CategoryForm() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      
      console.log('Submitting category:', name);
    } catch (err) {
      setError('Failed to create category');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setError(null);
  };

  return (
    <div className="category-form-container">
      <h2>Create Category</h2>
      {error && <div className="error">{error}</div>}
      <form className="category-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='form-label' htmlFor="name">Name:</label>
          <input className='form-input'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <button className='form-button' type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create'}
          </button>
          <button
          className='form-button'
           type="button" 
           onClick={handleReset} 
           disabled={loading}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;