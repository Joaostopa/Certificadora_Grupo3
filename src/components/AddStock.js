import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStock() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/stocks', { productId, quantity })
      .then(() => {
        navigate('/stocks');
      })
      .catch(error => {
        console.error('There was an error adding the stock!', error);
      });
  };

  return (
    <div>
      <h2>Add Stock</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
}

export default AddStock;
