import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StockList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get('/api/stocks')
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the stocks!', error);
      });
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock._id}>Product ID: {stock.productId} - Quantity: {stock.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default StockList;
