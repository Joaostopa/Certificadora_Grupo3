import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('/api/donations')
      .then(response => {
        setDonations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the donations!', error);
      });
  }, []);

  return (
    <div>
      <h2>Donations</h2>
      <ul>
        {donations.map(donation => (
          <li key={donation._id}>
            Donor Name: {donation.donorName} - Products: {donation.products.map(p => `Product ID: ${p.productId} - Quantity: ${p.quantity}`).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonationList;
