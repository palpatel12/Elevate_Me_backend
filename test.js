//file to test building model
require('dotenv').config();

const mongoose = require('mongoose');
const Building = require('./models/Building');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const testBuilding = new Building({
    hostelType: 'Men',
    blockName: 'A Block',
    lifts: []
});

testBuilding.save()
    .then(building => console.log(building))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
