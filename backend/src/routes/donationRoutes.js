const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// GET all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find().populate('products.productId');
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new donation
router.post('/', async (req, res) => {
  const donation = new Donation({
    donorName: req.body.donorName,
    products: req.body.products,
  });
  try {
    const newDonation = await donation.save();
    res.status(201).json(newDonation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
