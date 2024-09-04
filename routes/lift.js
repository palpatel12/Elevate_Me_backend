const express = require('express');
const router = express.Router();
const Lift = require('../models/Lift');

// Add a new lift
router.post('/', async (req, res) => {
    const { liftId, buildingId, currentFloor, direction, load, maxLoad, estimatedArrival, lastMaintained } = req.body;

    try {
        const newLift = new Lift({ liftId, buildingId, currentFloor, direction, load, maxLoad, estimatedArrival, lastMaintained });
        await newLift.save();
        res.status(201).json({ message: 'Lift added successfully', newLift });
    } catch (err) {
        res.status(500).json({ message: 'Error adding lift', error: err });
    }
});

// Get all lifts for a building
router.get('/:buildingId', async (req, res) => {
    const { buildingId } = req.params;

    try {
        const lifts = await Lift.find({ buildingId });
        res.status(200).json(lifts);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching lifts', error: err });
    }
});

module.exports = router;
