const mongoose = require('mongoose');

const liftSchema = new mongoose.Schema({
    liftId: {
        type: String,
        required: true,
        unique: true
    },
    buildingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Building',
        required: true
    },
    currentFloor: {
        type: Number,
        required: true
    },
    direction: {
        type: String,
        enum: ['up', 'down', 'pause'],
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    maxLoad: {
        type: Number,
        required: true
    },
    estimatedArrival: {
        type: Date,
        required: true
    },
    lastMaintained: {
        type: Date,
        required: true
    },
    iotData: {
        currentFloor: Number,
        direction: String,
        load: Number
    }
});

module.exports = mongoose.model('Lift', liftSchema);
