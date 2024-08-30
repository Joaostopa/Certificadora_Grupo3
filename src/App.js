import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import StockList from './components/StockList';
import AddStock from './components/AddStock';
import DonationList from './components/DonationList';
import AddDonation from './components/AddDonation';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Projeto Certificadora</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/stocks" element={<StockList />} />
          <Route path="/add-stock" element={<AddStock />} />
          <Route path="/donations" element={<DonationList />} />
          <Route path="/add-donation" element={<AddDonation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
