require('dotenv').config();

require('./models/User');
require('./models/Building');
require('./models/Lift');
const express = require('express');
const connectDB = require('./config/db.js');

//just did for testing databse connection
//const Lift = require('./models/Lift'); // Import the Lift model

const app = express();

// Connect to MongoDB
connectDB();

// Add a test lift to the database
// const addTestLift = async () => {
//     try {
//         const lift = new Lift({
//             liftId: 'Lift1',
//             currentFloor: 0,
//             status: 'idle',
//         });
//         await lift.save();
//         console.log('Test lift added');
//     } catch (err) {
//         console.error(err.message);
//     }
// };
//addTestLift();

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => res.send('API Running'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
