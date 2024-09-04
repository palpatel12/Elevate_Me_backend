/*require('dotenv').config();

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
*/

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const buildingRoutes = require('./routes/building');
const liftRoutes = require('./routes/lift');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/buildings', buildingRoutes);
app.use('/api/lifts', liftRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => console.log(err));

