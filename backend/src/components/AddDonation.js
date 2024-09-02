import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddDonation() {
  const [donorName, setDonorName] = useState('');
  const [products, setProducts] = useState([{ productId: '', quantity: 0 }]);
  const navigate = useNavigate();

  const handleProductChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index][event.target.name] = event.target.value;
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { productId: '', quantity: 0 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/donations', { donorName, products })
      .then(() => {
        navigate('/donations');
      })
      .catch(error => {
        console.error('There was an error adding the donation!', error);
      });
  };

  return (
    <div>
      <h2>Add Donation</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Donor Name" value={donorName} onChange={(e) => setDonorName(e.target.value)} required />
        {products.map((product, index) => (
          <div key={index}>
            <input type="text" name="productId" placeholder="Product ID" value={product.productId} onChange={(e) => handleProductChange(index, e)} required />
            <input type="number" name="quantity" placeholder="Quantity" value={product.quantity} onChange={(e) => handleProductChange(index, e)} required />
          </div>
        ))}
        <button type="button" onClick={handleAddProduct}>Add Another Product</button>
        <button type="submit">Add Donation</button>
      </form>
    </div>
  );
}

export default AddDonation;
