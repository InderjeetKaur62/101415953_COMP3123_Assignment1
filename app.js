const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API is running'));

// Define Routes
app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/emp', require('./routes/employee'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));