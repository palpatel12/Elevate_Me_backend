const express = require('express');
const router = express.Router();
const Building = require('../models/Building');

// Add a new building
router.post('/', async (req, res) => {
    const { hostelType, blockName } = req.body;

    try {
        const newBuilding = new Building({ hostelType, blockName });
        await newBuilding.save();
        res.status(201).json({ message: 'Building added successfully', newBuilding });
    } catch (err) {
        res.status(500).json({ message: 'Error adding building', error: err });
    }
});

// Get all buildings
router.get('/', async (req, res) => {
    try {
        const buildings = await Building.find();
        res.status(200).json(buildings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching buildings', error: err });
    }
});

module.exports = router;
