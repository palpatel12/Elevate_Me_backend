const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    hostelType: {
        type: String,
        enum: ['Men', 'Ladies'],
        required: true
    },
    blockName: {
        type: String,
        required: true
    },
    lifts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lift'
    }]
});

module.exports = mongoose.model('Building', buildingSchema);
